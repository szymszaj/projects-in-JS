const words = [
    { english: "parent company", polish: "firma macierzysta" },
    { english: "run a business", polish: "prowadzić biznes" },
    { english: "subsidiary", polish: "jednostka zależna" },
    { english: "technical writer", polish: "autor (instrukcji)" },
    { english: "report to somebody", polish: "raportować komuś" },
    { english: "look after", polish: "opiekować się" },
    { english: "deal with somebody", polish: "zajmować się kimś" },
    { english: "be responsible for something", polish: "być odpowiedzialnym za coś" },
    { english: "be in charge of somebody", polish: "być szefem kogoś" },
    { english: "be retired", polish: "być na emeryturze" },
    { english: "work shifts", polish: "pracować na zmiany" },
    { english: "working hours", polish: "godziny pracy" },
    { english: "working days", polish: "dni robocze" },
    { english: "neglect", polish: "zaniedbywać" }
];

let currentIndex = 0;

const wordInPolish = document.getElementById("word-in-polish");
const translationInput = document.getElementById("translation");
const validationMsg = document.getElementById("validation-msg");
const checkAnswerButton = document.getElementById("check-answer");
const tryAgainButton = document.getElementById("try-again"); // Dodaj przycisk "Spróbuj ponownie"

function showCurrentWord() {
    if (currentIndex < words.length) {
        wordInPolish.textContent = words[currentIndex].polish;
        translationInput.value = "";
        validationMsg.textContent = "";
        translationInput.classList.remove("correct", "incorrect");
    } else {
        wordInPolish.textContent = "Wszystkie słowa zostały przetłumaczone!";
        tryAgainButton.style.display = "block"; // Wyświetl przycisk "Spróbuj ponownie" po zakończonej sesji
        tryAgainButton.addEventListener("click", function () {
            currentIndex = 0; // Zresetuj licznik do zera
            showCurrentWord();
            tryAgainButton.style.display = ""
        });
    }
}

showCurrentWord();

translationInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkTranslation();
    }
});

checkAnswerButton.addEventListener("click", function () {
    showCurrentWord();
    checkTranslation();
});

tryAgainButton.addEventListener("click", function () {
    location.reload(); // Odśwież stronę
});

function checkTranslation() {
    const translation = translationInput.value;
    const currentWord = words[currentIndex];

    if (translation.toLowerCase() === currentWord.english) {
        currentIndex++;
        showCurrentWord();
        translationInput.classList.add("correct");
    } else {
        validationMsg.textContent = currentWord.english;
        translationInput.classList.add("incorrect");
        translationInput.value = "";
    }
}