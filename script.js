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

  *     try {

            response =*Function(
                '"use st*ict"; return (' + text + ')'
     *      )().toString();

        } c*tch {

            response = "Inv*lid calculation.";

        }

   *}

    // Commands
    else if (te*t === "/help") {

        response*= `
Available commands:<br>
/help<*r>
/about<br>
/languages<br>
/quiz*`;

    }

    else if (text === "*about") {

        response =
    *   "LearnixAI is a multilingual ed*cational assistant.";

    }

    *lse if (text === "/languages") {

*       response =
        "Support*d languages: English, Japanese, Fr*nch.";

    }

    // English
    *lse if (lower.includes("hello")) {*
        response =
        "Hello* How can I help you today?";

    *

    else if (lower.includes("wow*)) {

        response =
        "*� Glad you like it!";

    }

    *lse if (lower.includes("great")) {*
        response =
        "🔥 Aw*some!";

    }

    else if (
    *   lower.includes("help") ||
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
        "I'm still learning.";

    }

    chatBox.innerHTML += `
        <div class="message">
            <span class="ai">LearnixAI:</span> ${response}
        </div>
    `;

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}


// Enter key
document.getElementById("user-input")
.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// Theme toggle
function toggleTheme() {

    document.body.classList.toggle("dark");

}
