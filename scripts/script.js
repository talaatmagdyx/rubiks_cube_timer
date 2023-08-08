// List of possible moves and move modifiers
const moves = ["U", "D", "L", "R", "F", "B"];
const modifiers = ["", "'", "2"];

// Initialize scramble and puzzle size
let scramble = "";
let puzzleSize = 3; // Default to 3x3

// Event listener to change puzzle size
document.getElementById("puzzleSize").addEventListener("change", (event) => {
    puzzleSize = parseInt(event.target.value);
    generateScramble();
});

// Function to generate a scramble
function generateScramble() {
    scramble = "";
    const validMoves = moves.slice(0, puzzleSize >= 4 ? moves.length : 4);
    for (let i = 0; i < 20; i++) {
        const move = validMoves[Math.floor(Math.random() * validMoves.length)];
        const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
        scramble += move + modifier + " ";
    }
    document.getElementById("scramble").textContent = "Scramble: " + scramble;
}

// Initialize variables for timing
let startTime;
let interval;

// Event listener for the start button
document.getElementById("startButton").addEventListener("click", () => {
    generateScramble();
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    startTime = Date.now();
    interval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - startTime) / 1000;
        document.getElementById("timer").textContent = "Time: " + elapsedTime.toFixed(2) + " seconds";
    }, 10);
});

// Event listener for the stop button
document.getElementById("stopButton").addEventListener("click", () => {
    clearInterval(interval);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
});
