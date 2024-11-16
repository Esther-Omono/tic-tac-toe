# Tic-Tac-Toe Game

Welcome to the Tic-Tac-Toe game! This project is a simple implementation of the classic two-player game using HTML, CSS, and JavaScript. Players take turns placing their markers ("X" and "O") on a 3x3 grid, and the first player to align three markers vertically, horizontally, or diagonally wins the game.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [Acknowledgement](#acknowledgement)

## Features

- Two-player mode with customizable names.
- Visual grid that updates in real-time.
- Logic to determine wins and ties.
- Restart option to play again with the same or different players.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
    git clone https://github.com/yourusername/tic-tac-toe.git
```

2. Navigate to the project directory:

```bash
    cd tic-tac-toe
```

3. Open the index.html file in your preferred web browser.

## Usage

1. Enter player names in the input fields for "Player 1" and "Player 2."

2. Click the Start Game button to initialize the game.

3. Players take turns clicking on the grid squares to place their markers.

4. The game displays the result upon winning or tying.

5. Click the Restart Game button to start a new game.

## Code Structure

This project follows a modular structure to minimize global code and improve maintainability. Below are the key components:

- **HTML (index.html):** The structure of the web page, including the game board and controls.

- **CSS (style.css):** Styling for the game board, buttons, and overall layout.

- **JavaScript (main.js):**

  - **Gameboard Module:** Encapsulates the game state and logic related to the game board.

  - **Player Factory:** Represents a player in the game.

  - **Game Controller Module:** Manages the game flow, player turns, and win checking.

  - **Display Controller Module:** Handles rendering the game board and updating the result display.

### Key Functions in main.js

1. **Gameboard Module**

   - **getBoard():** Returns the current state of the game board.

   - **placeMarker(index, marker):** Places a marker on the board if the spot is empty.

   - **resetBoard():** Resets the game board to its initial state.

2. **Player Factory**

   - Constructs player objects with name and marker attributes.

3. Game Controller Module

   - **startGame(player1Name, player2Name):** Initializes the game with player names.

   - **playTurn(index):** Handles the logic for a player's turn.

   - **checkWinner():** Checks for winning conditions.

4. Display Controller Module

   - **render():** Renders the game board based on the current state.

   - **updateResult(message):** Updates the display with the game result.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and create a pull request.

## Acknowledgement

This project was inspired by and developed as part of [The Odin Project](https://www.theodinproject.com/), an open-source curriculum for learning web development.
