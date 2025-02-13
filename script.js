document.getElementById("yesButton").addEventListener("click", function() {
    const message = document.getElementById("message");
    const noButton = document.getElementById("noButton");

    message.textContent = "MEMEME, glad you accepted princess! 💖";

    // Hide No Button & Message
    noButton.style.display = "none";
    message.style.display = "none";

    // Show the love letter
    document.getElementById("loveLetter").style.display = "block";
});

let noClickCount = 0;
const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const message = document.getElementById("message");
const question = document.getElementById("question");

noButton.addEventListener("click", function() {
    if (noClickCount >= 5) {
        noButton.textContent = "STOP FINGORING ME";
        noButton.disabled = true;
        return;
    }

    let questionRect = question.getBoundingClientRect();
    let yesRect = yesButton.getBoundingClientRect();
    let buttonWidth = noButton.offsetWidth;
    let buttonHeight = noButton.offsetHeight;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let minX = Math.max(10, questionRect.left - 100);
    let maxX = Math.min(viewportWidth - buttonWidth - 10, questionRect.right + 150);
    let minY = Math.max(10, questionRect.bottom + 20);
    let maxY = Math.min(viewportHeight - buttonHeight - 10, minY + 150);

    let randomX, randomY;
    let isOverlapping;

    do {
        randomX = Math.fl
