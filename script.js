// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.getElementById("resetButton");
    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];

    cells.forEach(cell => {
        cell.addEventListener("click", handleCellClick);
    });

    resetButton.addEventListener("click", resetGame);

    function handleCellClick(event) {
        const cell = event.target;
        const index = cell.getAttribute("data-index");

        if (board[index] !== "" || checkWinner()) {
            return;
        }

        cell.textContent = currentPlayer;
        board[index] = currentPlayer;

        if (checkWinner()) {
            alert(`${currentPlayer} venceu!`);
        } else if (board.every(cell => cell !== "")) {
            alert("Empate!");
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });
    }

    function resetGame() {
        board = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        cells.forEach(cell => {
            cell.textContent = "";
        });
    }
});
