// Pobieramy referencje do elementów HTML
const dataInput = document.getElementById('data-input');
const analyzeButton = document.getElementById('analyze-button');
const analysisResults = document.getElementById('analysis-results');
const cancelBtn = document.getElementById('cancelbtn');

// Funkcja generująca zdanie
const generateSentence = (inputText) => {
  // Rozdzielamy tekst na słowa
  const words = inputText.split(/\s+/).filter(word => word.length > 0);

  if (words.length === 0) {
    return "Proszę wprowadzić co najmniej jedno słowo.";
  }

  // Generujemy zdanie na podstawie wprowadzonych słów
  const result = "Oto zdanie z wprowadzonych słów: " + words.join(' ') + ".";
  return result;
};

// Obsługa przycisku "Twórz"
analyzeButton.addEventListener('click', () => {
  const inputText = dataInput.value;
  const generatedSentence = generateSentence(inputText);
  analysisResults.textContent = generatedSentence;
});

// Obsługa przycisku "Cofnij"
cancelBtn.addEventListener('click', () => {
  dataInput.value = ''; // Czyścimy pole do wprowadzania tekstu
  analysisResults.textContent = ''; // Czyścimy wyniki analizy
});
