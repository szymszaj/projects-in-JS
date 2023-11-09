const dataInput = document.getElementById('data-input');
const analyzeButton = document.getElementById('analyze-button');
const analysisResults = document.getElementById('analysis-results');

const generateSentence = (inputText) => {
  const words = inputText.split(/\s+/).filter(word => word.length > 0);

  if (words.length === 0) {
    return "Proszę wprowadzić co najmniej jedno słowo.";
  }

  const result = "Oto zdanie z wprowadzonych słów: " + words.join(' ') + ".";
  return result;
};

analyzeButton.addEventListener('click', () => {
  const inputText = dataInput.value;
  const generatedSentence = generateSentence(inputText);
  analysisResults.textContent = generatedSentence;
});
