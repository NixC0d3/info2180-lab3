// Exercise 1 - Layout the board
document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => {
        square.classList.add("square");
    });
});

//Exercise 2 - Add an X or O to a square when clicked
let currentPlayer = "X";

document.querySelectorAll("#board div").forEach(square => {
    square.addEventListener("click", () => {
        if (!square.textContent) { // Only place mark if square is empty
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer); // Add styling for current player
            currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch player
        }
    });
});
