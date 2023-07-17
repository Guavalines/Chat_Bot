const chatInput = document.querySelector(".chat-input textarea");
const sendChatbtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart-toy</span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
}

const generateResponse = () => {
  const API URL = "https://api.openai.com/v1/chat/completions";
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
