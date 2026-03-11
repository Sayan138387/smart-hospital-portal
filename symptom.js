function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.toLowerCase();
  if(!msg) return;

  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += `<div class="user-msg">${msg}</div>`;
  input.value = "";

  let response = "Please consult a general physician.";

  if(msg.includes("fever") && msg.includes("cough")) {
    response = "You may have a viral infection. Recommended: General Physician.";
  }
  else if(msg.includes("headache")) {
    response = "Could be migraine or stress. Recommended: Neurologist.";
  }
  else if(msg.includes("chest pain")) {
    response = "Possible heart issue.Please seek Emergency care";
  }
  else if(msg.includes("stomach")) {
    response = "Digestive issue ,  Recommended: Gastroenterologist.";
  }
  else if(msg.includes("hi")) {
    response = "Hello, How can I help you";
  }

  setTimeout(() => {
    chatBox.innerHTML += `<div class="bot-msg">${response}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}