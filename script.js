const chatInput = document.querySelector(".chat-input textarea");
const sendChatbtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const API_KEY = ""

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart-toy</span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
}

const generateResponse = () => {
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: userMessage}]
    })
  }

  fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
    console.log();
  })
}

const handleChat = () => {
  userMessage = chatInput.ariaValueMax.trim();
  if(!userMessage) return;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));

  setTimeout(() => {
    // Display "Thinking..." message while waiting for the response
    chatbox.appendChild(createChatLi("Thinking...", "incoming"));
    generateResponse();
  }, 600);
}

sendChatbtn.addEventListener("click", handleChat);
