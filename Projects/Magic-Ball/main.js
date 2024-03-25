const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answerArr = [
  "Tak!",
  "Nie",
  "po co chcesz to wiedzieć",
  " nie wiem",
  "Ciężko powiedzieć",
  "Nie chcesz wiedzieć",
  "sam to zrób",
  "zapytaj mamy",
  "nie lubie tego typu pytań",
  "Może",
  "chyba ty",
];

const shakeBall = () => {
  ball.classList.add("shake-animaton");
  setTimeout(checkInput, 1000);
};

const checkInput = () => {
  if (input.value !== "" && input.value.slice(-1) === "?") {
    generatorAnswer();
    error.textContent = "";
  } else if (input.value !== "" && input.value.slice(-1) !== "?") {
    error.textContent = 'Pytanie musi być zakończone znakiem "?".';
    answer.textContent = "";
  } else {
    error.textContent = "Musisz zadać jakieś pytanie!";
    answer.textContent = "";
  }

  ball.classList.remove("shake-animaton");
};

const generatorAnswer = () => {
  const randomIndex = Math.floor(Math.random() * 11);
  answer.innerHTML = `<span>Odpowiedz:</span> ${answerArr[randomIndex]}`;
};

ball.addEventListener("click", shakeBall);
