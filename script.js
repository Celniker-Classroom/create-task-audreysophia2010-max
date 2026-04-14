
// Array of 50 random words
words = ["electricity", "hardware", "amphibian", "circumference", "computer", "civilization", "engineering", "hangman", "kangaroo", "imagination", "elasticity", "architecture", "greenhouse", "recursion", "submarine", "earthquake", "resistance", "bioluminescence", "function", "grandfather", "mechanism", "telephone", "bodyguard", "titanic", "mathematics", "approximation", "acidification", "technology", "housekeeper", "universe", "pyramid", "exoskeleton", "membership", "warning", "yourself", "screensaver", "language", "elevator", "tyrannical", "internet", "parameter", "traffic", "encouragement", "consciousness", "basketball", "butterfly", "automatic", "microphone", "cassette", "operation"];

// Game state
let answer = [];
let message = [];
let guess = "";

document.getElementById("start").addEventListener("click", function() {
    // Reset everything
    message = [];
    document.getElementById("head").textContent = "";
    document.getElementById("body").textContent = "";
    document.getElementById("legs").textContent = "";
    document.getElementById("word").textContent = "";
    document.getElementById("guess").value = "";
    document.getElementById("msg").textContent = "Make your first guess!";

    // Choose random word
    let rand = Math.floor(Math.random() * 50);
    answer = words[rand].split("");
    document.getElementById("msg").textContent = answer.join(""); // debugging purposes

    for (i = 0; i < answer.length; i++) {
        message.push("_");
    }

    document.getElementById("word").textContent = message.join(" ");
});

document.getElementById("submit").addEventListener("click", function() {
    guess = document.getElementById("guess").value.toLowerCase();
    let index;

    if (answer.includes(guess)) {
        // uncover letter that is correct, give positive encouragement in msg
        document.getElementById("msg").textContent = "good"; // debugging purposes

    } else {
        // add to hangman drawing, add to wrong guesses list, tell user to try again in msg
        document.getElementById("msg").textContent = "bad"; // debugging purposes

    }

});

// make an array for wrong guesses that prints in a list
