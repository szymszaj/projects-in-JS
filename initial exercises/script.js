const add = (x, y) => {
    const score = x + y 
    showScore(score)
}

const showScore = score2 => {
    console.log(`Wynik to: ${score2}`);
}

add(3, 9)