let password = document.getElementById("password");
let strength = document.getElementById("strength");
let message = document.getElementById("message");
let suggestions = document.getElementById("suggestions");

password.addEventListener("input", checkStrength);

function checkStrength() {

    let value = password.value;
    let score = 0;
    suggestions.innerHTML = "";

    if (value.length >= 8) {
        score++;
    } else {
        addSuggestion("Use at least 8 characters");
    }

    if (/[A-Z]/.test(value)) {
        score++;
    } else {
        addSuggestion("Add uppercase letter");
    }

    if (/[0-9]/.test(value)) {
        score++;
    } else {
        addSuggestion("Add numbers");
    }

    if (/[@$!%*?&]/.test(value)) {
        score++;
    } else {
        addSuggestion("Add special symbol");
    }

    updateUI(score);
}

function addSuggestion(text) {
    let li = document.createElement("li");
    li.textContent = text;
    suggestions.appendChild(li);
}

function updateUI(score) {

    if (score == 1) {
        strength.style.width = "25%";
        strength.style.background = "red";
        message.textContent = "Weak";
    }

    else if (score == 2) {
        strength.style.width = "50%";
        strength.style.background = "orange";
        message.textContent = "Medium";
    }

    else if (score == 3) {
        strength.style.width = "75%";
        strength.style.background = "blue";
        message.textContent = "Strong";
    }

    else if (score == 4) {
        strength.style.width = "100%";
        strength.style.background = "green";
        message.textContent = "Very Strong";
    }

    else {
        strength.style.width = "0%";
        message.textContent = "";
    }
}
