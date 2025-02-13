// Get elements
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const message = document.getElementById("message");
const loveLetter = document.getElementById("loveLetter");
const question = document.getElementById("question");

// Function to handle "Yes" button click
yesButton.addEventListener("click", function() {
    // Show love letter and hide "No" button
    loveLetter.classList.remove("hidden");
    noButton.style.display = "none";
    // Display message
    message.textContent = "MEMEME, glad you accepted princess! 💖";
});

// Variables to track "No" button click count
let noClickCount = 0;

// Function to handle "No" button click
noButton.addEventListener("click", function() {
    if (noClickCount >= 5) {
        noButton.textContent = "STOP FINGERING ME";
        noButton.disabled = true;
        return;
    }

    // Randomly move the "No" button around the screen
    let questionRect = question.getBoundingClientRect();
    let buttonWidth = noButton.offsetWidth;
    let buttonHeight = noButton.offsetHeight;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let randomX = Math.random() * (viewportWidth - buttonWidth);
    let randomY = Math.random() * (viewportHeight - buttonHeight);

    // Ensure "No" button doesn't overlap the question
    while (randomX < questionRect.left + buttonWidth || randomX > questionRect.right - buttonWidth) {
        randomX = Math.random() * (viewportWidth - buttonWidth);
    }

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Display random messages when "No" is clicked
    let messages = [
        "pls pls pls",
        "Wait, hold on a second...",
        "HELP! The button is running away!",
        "Just say yes already! 😡",
        "Aight bru 😔"
    ];

    message.textContent = messages[noClickCount] || "🥺";
    noClickCount++;
});
