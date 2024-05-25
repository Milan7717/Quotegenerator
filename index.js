const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
const copyEl = document.querySelector(".copy");
const soundEl = document.querySelector(".sound");

const buttonEl = document.querySelector(".button");

function randomQuote() {
  buttonEl.innerText = "Loading....";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteEl.innerText = result.content;
      authorEl.innerText = `- ${result.author}`;
      buttonEl.innerText = "New Quote";

      //removing the copy icon color
      copyEl.classList.remove("text-blue-500");
    });
}

soundEl.addEventListener("click", () => {
  //the SpeechSynthesisUtterance is a web sppech api that represents a speech request
  let utterance = new SpeechSynthesisUtterance(
    `${quoteEl.innerText} by ${authorEl.innerText}`
  );
  speechSynthesis.speak(utterance);
});

//for copy text
copyEl.addEventListener("click", () => {
  //copying the quote text on copyBtn click
  //writeText() property writess the specified text string  to the system clipboard
  navigator.clipboard.writeText(quoteEl.innerText);

  //for changing color of copy icons while click
  copyEl.classList.toggle("text-blue-500");
});

buttonEl.addEventListener("click", randomQuote);
