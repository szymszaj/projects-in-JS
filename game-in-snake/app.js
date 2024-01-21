const playBoard = document.querySelector(".play-board");

let gameOver = false;
let foodX, foodY;
let snakeX = 5,
  snakeY = 10;
let snakeBody = [];
let velocityX = 0,
  velocityY = 0;
let setIntervalId;

const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};
//clearing the timer and reloading the page on game 
const handleGameOver = () => {
  clearInterval(setIntervalId);
  alert("Game over! Press Ok to repley..");
  location.reload();
};

const changeDirection = (e) => {
  if (e.key === "ArrowUp") {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowDown") {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === "ArrowLeft") {
    velocityX = -1;
    velocityY = 0;
  } else if (e.key === "ArrowRight") {
    velocityX = 1;
    velocityY = 0;
  }
  initGame();
};

const initGame = () => {
  if (gameOver) return handleGameOver();
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  if (snakeX === foodX && snakeY === foodY) {
    changeFoodPosition();
    //Pushing food position to snake body array
    snakeBody.push([foodX, foodY]);
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }

  snakeBody[0] = [snakeX, snakeY];
  //updating the snake's head position based on the current velocity
  snakeX += velocityX;
  snakeY += velocityY;

  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    gameOver = true;
  }

  for (let i = 0; i < snakeBody.length; i++) {
    htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
  }

  playBoard.innerHTML = htmlMarkup;
};

changeFoodPosition();
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);
