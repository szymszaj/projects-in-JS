const dataInput = document.getElementById('data-input');
const analyzeButton = document.getElementById('analyze-button');
const analysisResults = document.getElementById('analysis-results');
const cancelBtn = document.getElementById('cancelbtn');


const generateSentenceWithAPI = async (inputText) => {
    if (inputText.trim() === '') {
        analysisResults.textContent = "Proszę wprowadzić co najmniej jedno słowo.";
        return;
    }


    const apiKey = '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';

    const requestBody = {
        prompt: inputText,
        max_tokens: 50, // Maksymalna liczba tokenów w odpowiedzi
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const responseData = await response.json();

        analysisResults.textContent = responseData.choices[0].text;
    } catch (error) {
        console.error('Błąd API:', error);
        analysisResults.textContent = "Wystąpił błąd podczas komunikacji z API.";
    }
};

analyzeButton.addEventListener('click', () => {
    const inputText = dataInput.value;
    generateSentenceWithAPI(inputText);
});


cancelBtn.addEventListener('click', () => {
    dataInput.value = '';
    analysisResults.textContent = '';
});
