function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const text = input.value.trim();

    if (!text) return;

    chatBox.innerHTML += `
        <div class="message">
            <span class="user">You:</span> ${text}
        </div>
    `;

    let response = "Hello! I am LearnixAI.";

    if (/[ぁ-んァ-ン一-龥]/.test(text)) {
        response = "こんにちは！私は LearnixAI です！";
    }

    else if (
        /[àâçéèêëîïôûùüÿœ]/i.test(text) ||
        /(bonjour|salut|merci)/i.test(text)
    ) {
        response = "Bonjour ! Je suis LearnixAI.";
    }

    chatBox.innerHTML += `
        <div class="message">
            <span class="ai">LearnixAI:</span> ${response}
        </div>
    `;

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}
