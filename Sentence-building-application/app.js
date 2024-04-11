const dataInput = document.getElementById("data-input");
const analyzeButton = document.getElementById("analyze-button");
const analysisResults = document.getElementById("analysis-results");
const cancelBtn = document.getElementById("cancelbtn");

const positiveSentences = [
  "Tak, też tak myślę, że jest OK!",
  "Uważam, że świetnie idzie, nie ma się co martwić!",
  "Oczywiście, że tak! To świetny pomysł!",
  "Mam pewność, że wszystko będzie w porządku.",
  "Zdecydowanie tak, idziemy na całość!",
  "Myślę, że to doskonały plan!",
  "Jestem przekonany, że uda się zrealizować ten projekt.",
  "Nie ma wątpliwości, że osiągniemy sukces!",
  "Spokojnie, wszystko będzie dobrze.",
  "Co ty chcesz z tym robić? Moim zdaniem, możemy osiągnąć naprawdę świetne rezultaty!",
];

const generateSentence = () => {
  const inputText = dataInput.value.trim();

  if (inputText === "") {
    analysisResults.textContent = "Proszę wprowadzić co najmniej jedno słowo.";
    return;
  }

  const enteredWords = inputText.split(/\s+/);
  const mixedWords = shuffle([...positiveSentences, ...enteredWords]);
  const selectedSentences = mixedWords.slice(0, 2);
  const sentence = insertWords(selectedSentences, enteredWords);

  analysisResults.textContent = `Generuje: ${sentence}`;
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const insertWords = (sentences, words) => {
  return sentences
    .map((sentence) => {
      const randomIndex = Math.floor(
        Math.random() * (sentence.split(" ").length + 1)
      );
      const before = sentence.split(" ").slice(0, randomIndex);
      const after = sentence.split(" ").slice(randomIndex);
      return [...before, ...words, ...after].join(" ");
    })
    .join(" ");
};

analyzeButton.addEventListener("click", () => {
  generateSentence();
});

cancelBtn.addEventListener("click", () => {
  dataInput.value = "";
  analysisResults.textContent = "";
});
