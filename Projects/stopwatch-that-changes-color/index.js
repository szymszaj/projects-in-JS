const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.start')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

//zmienna globalna 
let countTime;
let minutes = 0
let seconds = 0

//tablica 
let timeArr = []

//stoper przycisk start
const handleStart = () => {

    clearInterval(countTime)

    countTime = setInterval(() => {
        if (seconds < 9) {
            seconds++
            stopwatch.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 9 && seconds < 59) {
            seconds++
            stopwatch.textContent = `${minutes}:${seconds}`
        } else {
            minutes++
            seconds = 0
            stopwatch.textContent = `${minutes}:00`
        }

    }, 100)
}
const handleStop = () => {

    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

    if (stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible'
        timeArr.push(stopwatch.textContent)
        console.log(timeArr);
    // time.style.fontWeight = 'bold'
    }
    clearStuff();
}


const handlePause = () => {
    clearInterval(countTime)
}

const handleReset = () => {
    time.style.visibility = 'hidden'
    timeArr = []
    clearStuff();
}


const clearStuff = () => {
    clearInterval(countTime)
    stopwatch.textContent = '0:00'
    timeList.textContent = ''
    seconds = 0
    minutes = 0
}
const showHistory = () => {
    let num = 1
    timeList.textContent = ''
    timeArr.forEach(time => {
        const newTime = document.createElement('li')
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`
        timeList.appendChild(newTime)
        num++
    })

}


startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)