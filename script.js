document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const message = document.getElementById("message");
    const loveLetter = document.getElementById("loveLetter");
    let noClickCount = 0;

    // Yes Button Click
    yesButton.addEventListener("click", function () {
        message.textContent = "MEMEME, glad you accepted princess! 💖";
        
        // Hide "No" button & Message
        noButton.style.display = "none";
        message.style.display = "none";

        // Show the love letter
        loveLetter.style.display = "block";
    });

    // No Button Click (moves randomly)
    noButton.addEventListener("click", function () {
        if (noClickCount >= 
