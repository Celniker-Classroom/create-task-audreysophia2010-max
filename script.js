// Array of 50 random words at least 7 letters long
words = ["electricity", "hardware", "amphibian", "circumference", "computer", "civilization", "engineering", "hangman", "kangaroo", "imagination", "elasticity", "architecture", "greenhouse", "recursion", "submarine", "earthquake", "resistance", "bioluminescence", "function", "grandfather", "mechanism", "telephone", "bodyguard", "titanic", "mathematics", "approximation", "acidification", "technology", "housekeeper", "universe", "pyramid", "exoskeleton", "membership", "warning", "yourself", "screensaver", "language", "elevator", "tyrannical", "internet", "parameter", "traffic", "encouragement", "consciousness", "basketball", "butterfly", "automatic", "microphone", "cassette", "operation"];

// Game state
let answer = [];
let message = [];
let drawCount = 0;
let guessed = [];
const msg = document.getElementById("msg");
const head = document.getElementById("head");
const body = document.getElementById("body");
const legs = document.getElementById("legs");
document.getElementById("submit").style.display = "none";
document.getElementById("guess").style.display = "none";


document.getElementById("start").addEventListener("click", function() {
    // Reset everything
    message = [];
    guessed = [];
    drawCount = 0;
    updateDrawing();
    document.getElementById("guess").value = "";
    document.getElementById("start").textContent = "New Round";
    msg.textContent = "Make your first guess!";
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("guess").style.display = "inline-block";
    document.getElementById("instruct").style.display = "none";
    document.getElementById("submit").disabled = false;

    // Choose random word
    let rand = Math.floor(Math.random() * 50);
    answer = words[rand].split("");
    for (let i = 0; i < answer.length; i++) {
        message.push("_");
    }
    document.getElementById("word").textContent = message.join(" ");
});

// Guess button logic
document.getElementById("submit").addEventListener("click", function() {
    let guess = document.getElementById("guess").value.toLowerCase();
    document.getElementById("guess").value = "";

    // Error handling
    if (guess.length != 1 || guess === guess.toUpperCase()) {
        msg.textContent = "Please enter 1 letter.";
        return;
    }

    // Check if already guessed
    if (guessed.includes(guess)) {
        msg.textContent = "You already guessed '" + guess + "'. Try again.";
        return; // Stop the function here
    }
    guessed.push(guess);

    if (answer.includes(guess)) {
        // Correct guess
        msg.textContent = "Correct! The hidden word includes " + guess + "."; 
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] === guess) {
                message[i] = guess;
            }
        }
        document.getElementById("word").textContent = message.join(" ");
    } else {
        // Incorrect guess
        msg.textContent = "The hidden word does not include " + guess + ".";
        drawCount++;
        updateDrawing();
    }

    // Win or lose states
    if (drawCount === 6) {
        msg.textContent = "You lost! The hidden word was " + answer.join("") + ".";
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").style.display = "none";
        document.getElementById("guess").style.display = "none";
    } else if (areEqual(message, answer)) {
        if (drawCount === 0) {
            msg.textContent = "You won! You didn't make any wrong guesses.";
        } else if (drawCount === 1) {
            msg.textContent = "You won! You only made 1 wrong guess.";
        } else {
            msg.textContent = "You won! You only made " + drawCount + " wrong guesses.";
        }
        document.getElementById("word").textContent = message.join("");
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").style.display = "none";
        document.getElementById("guess").style.display = "none";
    }
});

// List with iteration, selection, and parameters
function areEqual(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) return false;
    }
    return true;
}

// Draw function
function updateDrawing() {
    if (drawCount === 0) {
        head.textContent = "   ";
        body.textContent = "   ";
        legs.textContent = "   ";
    } else if (drawCount === 1) {
        head.textContent = " O ";
    } else if (drawCount === 2) {
        body.textContent = "/  ";
    } else if (drawCount === 3) {
        body.textContent = "/| ";
    } else if (drawCount === 4) {
        body.textContent = "/|\\";
    } else if (drawCount === 5) {
        legs.textContent = "/  ";
    } else if (drawCount === 6) {
        legs.textContent = "/ \\";
    }
}