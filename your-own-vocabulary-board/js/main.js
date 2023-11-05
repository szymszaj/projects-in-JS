const words = [
    { polish: "firma macierzysta", english: "parent company" },
    { polish: "prowadzić biznes", english: "run a business" },
    { polish: "jednostka zależna", english: "subsidiary" },
    { polish: "autor", english: "author" },
    { polish: "report to somebody", english: "raportować komuś" },
    { polish: "look after", english: "opiekować się" },
    { polish: "deal with somebody", english: "zajmować się kimś" },
    { polish: "be responsible for something", english: "być odpowiedzialnym za coś" },
    { polish: "be in charge of somebody", english: "być szefem kogoś" },
    { polish: "be retired", english: "być na emeryturze" },
    { polish: "work shifts", english: "pracować na zmiany" },
    { polish: "working hours", english: "godziny pracy" },
    { polish: "working days", english: "dni robocze" },
    { polish: "zaniedbywać", english: "neglect" }
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
        tryAgainButton.style.display = "block"; // Wyświetl przycisk "Spróbuj ponownie"
        tryAgainButton.addEventListener("click", function () {
            currentIndex = 0; // Zresetuj licznik do zera
            showCurrentWord();
            tryAgainButton.style.display = ""
        });
        // setTimeout(function () {
        //     location.reload(); // Odśwież stronę po pewnym czasie (możesz dostosować czas)
        // }, 3000);
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
    location.reload(); // Odśwież stronę, rozpocznij od nowa
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
