const dataInput = document.getElementById('data-input');
const analyzeButton = document.getElementById('analyze-button');
const analysisResults = document.getElementById('analysis-results');
const cancelBtn = document.getElementById('cancelbtn');

const wordsArray = ["Słowo1", "Słowo2", "Słowo3", "Słowo4", "Słowo5", /* ... dodaj więcej słów ... */];

const generateRandomSentence = () => {
    if (wordsArray.length === 0) {
        analysisResults.textContent = "Brak dostępnych słów do wygenerowania zdania.";
        return;
    }

    const sentenceLength = Math.floor(Math.random() * wordsArray.length) + 1;
    const randomSentence = Array.from({ length: sentenceLength }, () => wordsArray[Math.floor(Math.random() * wordsArray.length)]).join(' ');

    analysisResults.textContent = randomSentence;
};

analyzeButton.addEventListener('click', () => {
    generateRandomSentence();
});

cancelBtn.addEventListener('click', () => {
    dataInput.value = '';
    analysisResults.textContent = '';
});
