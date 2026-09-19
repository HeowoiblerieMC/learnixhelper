function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const text = input.value.trim();

    if (text === "") return;

    // user msg
    chatBox.innerHTML += `
        <div class="message">
            <span class="user">You:</span> ${text}
        </div>
    `;

    let response = "";
    const lower = text.toLowerCase();

    // Calculator
if (/^[0-9+\-*/(). ]+$/.test(text)) {

    try {
        response = eval(text).toString();
    }

    catch {
        response = "Invalid calculation.";
    }

}

// Commands
else if (text === "/help") {

    response = `
Available commands:<br>
/help<br>
/about<br>
/languages
`;

}

    // Commands
    if (text === "/help") {

        response = `
Available commands:<br>
/help<br>
/about<br>
/languages
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

        response =
        "Hello! How can I help you today?";

    }

    else if (
        lower.includes("help") ||
        lower.includes("assist")
    ) {

        response =
        "Of course! I can help with studying and general questions.";

    }

    else if (lower.includes("math")) {

        response =
        "I can help with mathematics.";

    }

    else if (lower.includes("science")) {

        response =
        "Let's learn some science!";

    }

    else if (lower.includes("english")) {

        response =
        "I can help with English.";

    }

    else if (lower.includes("history")) {

        response =
        "I can help with history.";

    }

    // Japanese
    else if (/[ぁ-んァ-ン一-龥]/.test(text)) {

        response =
        "こんにちは！今日は何を勉強しますか？";

    }

    // French
    else if (
        lower.includes("bonjour") ||
        lower.includes("merci")
    ) {

        response =
        "Bonjour ! Comment puis-je vous aider ?";

    }

    // Default
    else {

        response =
        "I'm still learning. Please ask about math, science, history, or English.";

    }

    // AI msg
    chatBox.innerHTML += `
        <div class="message">
            <span class="ai">LearnixAI:</span> ${response}
        </div>
    `;

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}


// Enter send
document.getElementById("user-input")
.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});
