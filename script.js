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
/help<*
