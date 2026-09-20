let currentAnswer = null;

function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const text = input.value.trim();

    if (text === "") return;

    chatBox.innerHTML += `
        <div class="message">
            <span class="user">You:</span> ${text}
        </div>
    `;

    let response = "";
    const lower = text.toLowerCase();

    // Quiz answer check
    if (currentAnswer !== null) {

        if (text === currentAnswer.toString()) {

            response = "✅ Correct!";
            currentAnswer = null;

        } else {

            response = "❌ Try again!";

        }

    }

    // Quiz command
    else if (text === "/quiz") {

        const a = Math.floor(Math.random() * 20) + 1;
        const b = Math.floor(Math.random() * 20) + 1;

        currentAnswer = a * b;

        response = `Question: What is ${a} × ${b}?`;

    }

    // Calculator
    else if (/^[0-9+\-*/(). ]+$/.test(text)) {

        try {

            response = Function(
                '"use strict"; return (' + text + ')'
            )().toString();

        } catch {

            response = "Invalid calculation.";

        }

    }

    // Commands
    else if (text === "/help") {

        response = `
Available commands:<br>
/help<br>
/about<br>
/languages<br>
/quiz
`;

    }

    else if (text === "/about") {

        response =
        "LearnixAI is a multilingual educational assistant.";

    }

    else if (text === "/languages") {

        response =
        "Supported languages: English, Japanese, French.";

    }

    // English
    else if (lower.includes("hello")) {

        response = "Hello! How can I help you today?";

    }

    else if (lower.includes("wow")) {

        response = "😎 Glad you like it!";

    }

    else if (lower.includes("great")) {

        response = "🔥 Awesome!";

    }

    else if (lower.includes("nice")) {

        response = "😎 
