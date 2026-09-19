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

    // English
    if (lower.includes("hello")) {
        response = "Hello! How can I help you today?";
    }

    else if (lower.includes("math")) {
        response = "I can help with mathematics.";
    }

    else if (lower.includes("science")) {
        response = "Let's learn some science!";
    }

    // Japanese
    else if (/[ぁ-んァ-ン一-龥]/.test(text)) {
        response = "こんにちは！今日は何を勉強しますか？";
    }

    // French
    else if (
        lower.includes("bonjour") ||
        lower.includes("merci")
    ) {
        response = "Bonjour ! Comment puis-je vous aider ?";
    }

    else {
        response = "I'm still learning.";
    }

    chatBox.innerHTML += `
        <div class="message">
            <span class="ai">LearnixAI:</span> ${response}
        </div>
    `;

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}
