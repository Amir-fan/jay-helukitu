document.getElementById("yesButton").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.textContent = "MEMEME, glad you accepted princess! 💖";

    // Show the love letter
    document.getElementById("loveLetter").style.display = "block";
});

let noClickCount = 0;
const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const message = document.getElementById("message");
const question = document.querySelector("h1");

noButton.addEventListener("click", function() {
    if (noClickCount >= 5) {
        noButton.textContent = "STOP FINGERING ME";
        noButton.disabled = true;
        return;
    }

    let questionRect = question.getBoundingClientRect();
    let yesRect = yesButton.getBoundingClientRect();
    let buttonWidth = noButton.offsetWidth;
    let buttonHeight = noButton.offsetHeight;

    // Define a safe zone below the question but avoiding the Yes button
    let minX = questionRect.left - 100; // A little left of the question
    let maxX = questionRect.right + 50 - buttonWidth; // A little right of the question
    let minY = questionRect.bottom + 20; // Below the question
    let maxY = minY + 150; // Limit how far it can go down

    let randomX, randomY;
    let isOverlapping;

    do {
        randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
        randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

        // Check if it overlaps with the Yes button
        isOverlapping = (
            randomX < yesRect.right &&
            randomX + buttonWidth > yesRect.left &&
            randomY < yesRect.bottom &&
            randomY + buttonHeight > yesRect.top
        );
    } while (isOverlapping); // Keep generating new positions until it's safe

    // Position the button at the new coordinates
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Move the message to follow the No button
    message.style.position = "absolute";
    message.style.left = (randomX + 20) + "px";
    message.style.top = (randomY + 50) + "px";

    // Change the message text
    let messages = [
        "pls pls pls",
        "Wait, hold on a second...",
        "HELP! The button is running away!",
        "Just say yes already, hator! *mad jay sounds 😡*",
        "aight bru 😔"
    ];
    
    message.textContent = messages[noClickCount];

    noClickCount++;
});
