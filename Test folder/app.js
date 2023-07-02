function reverseWord() {
    const input = document.getElementById('word');
    const reversedWord = input.value.split('').reverse().join('');
    document.getElementById('reversed').textContent = reversedWord;
  }