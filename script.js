function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userMessage = input.value.trim();

    if (userMessage === "") return;

    chatBox.innerHTML += `
        <div class="message">
            <span class="user">You:</span>
            ${userMessage}
        </div>
    `;

    let response = "Hello! I am LearnixAI.";

    // Japanese
    if (/[ぁ-んァ-ン一-龥]/.test(userMessage)) {
        response = "こんにちは！私は LearnixAI です！";
    }

    // French
    else if (
        /[àâçéèêëîïôûùüÿœ]/i.test(userMessage) ||
        /(bonjour|salut|merci|français|comment)/i.test(userMessage)
    ) {
        response = "Bonjour ! Je suis LearnixAI. Comment puis-je vous aider aujourd'hui ?";
    }

    chatBox.innerHTML += `
        <div class="message">
            <span class="ai">LearnixAI:</span>
            ${response}
        </div>
    `;

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}
