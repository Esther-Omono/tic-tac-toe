// Gameboard Module (IIFE)
const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  
  const getBoard = () => board;
  
  const placeMarker = (index, marker) => {
    if (board[index] === "") {
      board[index] = marker;
      return true; // Success
    }
    return false; // Spot already taken
  };
  
  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };
  
    return { getBoard, placeMarker, resetBoard };
})();
  
// Player Factory
const Player = (name, marker) => {
  return { name, marker };
};
  
// Game Controller Module
const GameController = (() => {
  let players = [];
  let currentPlayerIndex = 0;
  let gameOver = false;
  
  const startGame = (player1Name, player2Name) => {
    players = [
      Player(player1Name, "X"),
      Player(player2Name, "O")
    ];
    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.resetBoard();
    DisplayController.render();
    DisplayController.updateResult("");
  };
  
  const playTurn = (index) => {
    if (gameOver || !Gameboard.placeMarker(index, players[currentPlayerIndex].marker)) return;
  
    if (checkWinner()) {
      gameOver = true;
      DisplayController.updateResult(`${players[currentPlayerIndex].name} wins!`);
    } else if (Gameboard.getBoard().every((cell) => cell !== "")) {
      gameOver = true;
      DisplayController.updateResult("It's a tie!");
    } else {
      currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
      DisplayController.render();
    }
  };
  
  const checkWinner = () => {
    const board = Gameboard.getBoard();
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
  
    return winningCombos.some(combo => 
      board[combo[0]] !== "" &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[1]] === board[combo[2]]
    );
  };
  
  return { startGame, playTurn };
})();
  
// Display Controller Module
const DisplayController = (() => {
  const gameboardDiv = document.getElementById("gameboard");
  const resultDiv = document.getElementById("game-result");
  
  const render = () => {
    gameboardDiv.innerHTML = ""; // Clear previous content
    Gameboard.getBoard().forEach((cell, index) => {
      const cellDiv = document.createElement("div");
      cellDiv.textContent = cell;
      cellDiv.addEventListener("click", () => GameController.playTurn(index));
      gameboardDiv.appendChild(cellDiv);
    });
  };
  
  const updateResult = (message) => {
    resultDiv.textContent = message;
  };
  
  return { render, updateResult };
})();
  
// Event Listeners for Start/Restart Buttons
document.getElementById("start-game").addEventListener("click", () => {
  const player1 = document.getElementById("player1").value || "Player 1";
  const player2 = document.getElementById("player2").value || "Player 2";
  GameController.startGame(player1, player2);
});
  
document.getElementById("restart-game").addEventListener("click", () => {
  GameController.startGame("Player 1", "Player 2");
});
  