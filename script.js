const chatInput = document.querySelector(".chat-input textarea");
const sendChatbtn = document.querySelector(".chat-input span");

let userMessage;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = className === "outgoing" ?
}

const handleChat = () => {
  userMessage = chatInput.ariaValueMax.trim();
  if(!userMessage) return;

  createChatLi(userMessage, "outgoing");
}

sendChatbtn.addEventListener("click", handleChat);
