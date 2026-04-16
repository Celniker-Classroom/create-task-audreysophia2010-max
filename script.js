// Array of 50 random words at least 7 letters long
words = ["electricity", "hardware", "amphibian", "circumference", "computer", "civilization", "engineering", "hangman", "kangaroo", "imagination", "elasticity", "architecture", "greenhouse", "recursion", "submarine", "earthquake", "resistance", "bioluminescence", "function", "grandfather", "mechanism", "telephone", "bodyguard", "titanic", "mathematics", "approximation", "acidification", "technology", "housekeeper", "universe", "pyramid", "exoskeleton", "membership", "warning", "yourself", "screensaver", "language", "elevator", "tyrannical", "internet", "parameter", "traffic", "encouragement", "consciousness", "basketball", "butterfly", "automatic", "microphone", "cassette", "operation"];

// Game state
let answer = [];
let message = [];
let drawCount = 0;

document.getElementById("start").addEventListener("click", function() {
    // Reset everything
    message = [];
    drawCount = 0;
    updateDrawing();
    document.getElementById("guess").value = "";
    document.getElementById("msg").textContent = "Make your first guess!";
    document.getElementById("submit").disabled = false;

    // Choose random word
    let rand = Math.floor(Math.random() * 50);
    answer = words[rand].split("");
    for (i = 0; i < answer.length; i++) {
        message.push("_");
    }
    document.getElementById("word").textContent = message.join(" ");
});

// Guess button logic
document.getElementById("submit").addEventListener("click", function() {
    let guess = document.getElementById("guess").value.toLowerCase();

    if (answer.includes(guess)) {
        // Correct guess
        document.getElementById("msg").textContent = "Correct! The hidden word includes " + guess + "."; 
        for (i = 0; i <= answer.length; i++) {
            if (answer[i] === guess) {
                message[i] = guess;
            }
        }
        document.getElementById("word").textContent = message.join(" ");
    } else {
        // Incorrect guess
        document.getElementById("msg").textContent = "The hidden word does not include " + guess + ".";
        drawCount++;
        updateDrawing();
    }

    // Win or lose states
    if (drawCount === 6) {
        document.getElementById("msg").textContent = "You lost! The hidden word was " + answer.join("") + ".";
        document.getElementById("submit").disabled = true;
    } else if (areEqual(message, answer)) {
        if (drawCount === 0) {
            document.getElementById("msg").textContent = "You won! You didn't make any wrong guesses.";
        } else if (drawCount === 1) {
            document.getElementById("msg").textContent = "You won! You only made 1 wrong guess.";
        } else {
            document.getElementById("msg").textContent = "You won! You only made " + drawCount + " wrong guesses.";
        }
        document.getElementById("submit").disabled = true;
    }

    document.getElementById("guess").value = "";
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
        document.getElementById("head").textContent = "";
        document.getElementById("body").textContent = "";
        document.getElementById("legs").textContent = "";
    } else if (drawCount === 1) {
        document.getElementById("head").textContent = " O ";
        document.getElementById("body").textContent = "";
        document.getElementById("legs").textContent = "";
    } else if (drawCount === 2) {
        document.getElementById("head").textContent = " O ";
        document.getElementById("body").textContent = "/";
        document.getElementById("legs").textContent = "";
    } else if (drawCount === 3) {
        document.getElementById("head").textContent = " O ";
        document.getElementById("body").textContent = "/|";
        document.getElementById("legs").textContent = "";
    } else if (drawCount === 4) {
        document.getElementById("head").textContent = " O ";
        document.getElementById("body").textContent = "/|\\";
        document.getElementById("legs").textContent = "";
    } else if (drawCount === 5) {
        document.getElementById("head").textContent = " O ";
        document.getElementById("body").textContent = "/|\\";
        document.getElementById("legs").textContent = "/ ";
    } else if (drawCount === 6) {
        document.getElementById("head").textContent = " O ";
        document.getElementById("body").textContent = "/|\\";
        document.getElementById("legs").textContent = "/ \\";
    }
}