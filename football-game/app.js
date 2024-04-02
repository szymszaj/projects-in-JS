const field = document.getElementById("field");
const ball = document.getElementById("ball");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const score1Element = document.getElementById("score1");
const score2Element = document.getElementById("score2");

const fieldWidth = field.offsetWidth;
const fieldHeight = field.offsetHeight;
const ballSize = ball.offsetWidth;
const playerHeight = player1.offsetHeight;

let ballX = fieldWidth / 2 - ballSize / 2;
let ballY = fieldHeight / 2 - ballSize / 2;
let ballSpeedX = 3;
let ballSpeedY = 3;

let player1Y = fieldHeight / 2 - playerHeight / 2;
let player2Y = fieldHeight / 2 - playerHeight / 2;
const playerSpeed = 10;

let score1 = 0;
let score2 = 0;

// Function to update the position of the ball
function updateBallPosition() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Handling ball collision with top and bottom walls
  if (ballY <= 0 || ballY >= fieldHeight - ballSize) {
    ballSpeedY = -ballSpeedY;
  }

  // Handling ball collision with player1's paddle
  if (
    ballX <= player1.offsetWidth &&
    ballY + ballSize >= player1Y &&
    ballY <= player1Y + playerHeight
  ) {
    ballSpeedX = -ballSpeedX * 3.2;
  }

  // Handling ball collision with player2's paddle
  if (
    ballX + ballSize >= fieldWidth - player2.offsetWidth &&
    ballY + ballSize >= player2Y &&
    ballY <= player2Y + playerHeight
  ) {
    ballSpeedX = -ballSpeedX * 3.2;
  }

  // Handling scoring and resetting ball position
  if (ballX < 0) {
    score2++;
    updateScoreboard();
    resetBall();
  }

  if (ballX > fieldWidth - ballSize) {
    score1++;
    updateScoreboard();
    resetBall();
  }

  // Updating ball position on the screen
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
}

// Function to reset the ball position and speed
function resetBall() {
  ballX = fieldWidth / 2 - ballSize / 2;
  ballY = fieldHeight / 2 - ballSize / 2;
  ballSpeedX = 3;
  ballSpeedY = 3;
}

// Function to update players' positions
function updatePlayers() {
  // Preventing players from going out of bounds
  if (player1Y <= 0) {
    player1Y = 0;
  }

  if (player1Y >= fieldHeight - playerHeight) {
    player1Y = fieldHeight - playerHeight;
  }

  if (player2Y <= 0) {
    player2Y = 0;
  }

  if (player2Y >= fieldHeight - playerHeight) {
    player2Y = fieldHeight - playerHeight;
  }

  // Updating players' positions on the screen
  player1.style.top = player1Y + "px";
  player2.style.top = player2Y + "px";
}

// Event listener for keydown events to control player movement
function onKeyDown(event) {
  switch (event.key) {
    case "w":
      player1Y -= playerSpeed;
      break;
    case "s":
      player1Y += playerSpeed;
      break;
    case "ArrowUp":
      player2Y -= playerSpeed;
      break;
    case "ArrowDown":
      player2Y += playerSpeed;
      break;
  }
}

// Function to update the scoreboard with current scores
function updateScoreboard() {
  score1Element.textContent = score1;
  score2Element.textContent = score2;
}

// Main game loop to update ball position and player positions
function gameLoop() {
  updateBallPosition();
  updatePlayers();
}

// Event listener for keydown events
document.addEventListener("keydown", onKeyDown);

// Main game loop running every 20 milliseconds
setInterval(gameLoop, 20);
