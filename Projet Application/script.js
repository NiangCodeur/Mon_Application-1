const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = textarea.value;
  const utternance = new SpeechSynthesisUtterance(text);
  synth.speak(utternance);
};

button.addEventListener("click", textToSpeech);
