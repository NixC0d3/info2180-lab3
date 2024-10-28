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

//Exercise 3 - Change the style when you move your mouse over a square
document.querySelectorAll("#board div").forEach(square => {
    square.addEventListener("mouseenter", () => square.classList.add("hover"));
    square.addEventListener("mouseleave", () => square.classList.remove("hover"));
});

//Exercise 4 - Check the winner and update the status
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

function checkWinner() {
    const squares = Array.from(document.querySelectorAll("#board div"));
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            squares[a].textContent &&
            squares[a].textContent === squares[b].textContent &&
            squares[a].textContent === squares[c].textContent
        ) {
            document.getElementById("status").textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
            document.getElementById("status").classList.add("you-won");
            return true;
        }
    }
    return false;
}

square.addEventListener("click", () => { // Integrate the checkWinner function in the click event:
    if (!square.textContent) {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        if (checkWinner()) {
            // Disable further clicks
            document.querySelectorAll("#board div").forEach(square => square.removeEventListener("click", clickHandler));
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
});
