const dataInput = document.getElementById('data-input');
const analyzeButton = document.getElementById('analyze-button');
const analysisResults = document.getElementById('analysis-results');
const cancelBtn = document.getElementById('cancelbtn');

const wordsArray = ["iuiu", "Siuio2", "iu", "iu", "Słowdfbdvgbdo5","nie chce teraz iść"];

const generateSentence = () => {
    const inputText = dataInput.value.trim();

    if (inputText === '') {
        analysisResults.textContent = "Proszę wprowadzić co najmniej jedno słowo.";
        return;
    }

    const enteredWords = inputText.split(/\s+/);
    const mixedWords = shuffle([...wordsArray, ...enteredWords]);
    const sentence = mixedWords.join(' ');

    analysisResults.textContent = `Zdanie: ${sentence}\nSłowa: ${enteredWords.join(', ')}`;
};


const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};

analyzeButton.addEventListener('click', () => {
    generateSentence();
});

cancelBtn.addEventListener('click', () => {
    dataInput.value = '';
    analysisResults.textContent = '';
});
