// Selecting elements from the HTML document for manipulation
const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");

// Setting initial game state variables
let gameOver = false; // Flag indicating whether the game is over or not
let foodX, foodY; // Coordinates for the food
let snakeX = 5,
  snakeY = 10; // Initial position of the snake
let snakeBody = []; // Array to store coordinates of snake's body segments
let velocityX = 0,
  velocityY = 0; // Velocity of the snake
let setIntervalId; // ID for the setInterval function used to update the game
let score = 0; // Current score in the game
let isPaused = false; // Flag indicating whether the game is paused

// Retrieving high score from local storage, or defaulting to 0 if not available
let highScore = localStorage.getItem("high-score") || 0;
// Displaying the high score on the page
highScoreElement.innerText = `High Score: ${highScore}`;

// Function to change the position of the food randomly on the game board
const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1; // Generating random X coordinate
  foodY = Math.floor(Math.random() * 30) + 1; // Generating random Y coordinate
};

// Function to handle game over event
const handleGameOver = () => {
  clearInterval(setIntervalId); // Stop the game loop
  alert("Game over! Press Ok to replay.."); // Show a message to the player
  location.reload(); // Reload the page to restart the game
};

// Function to toggle game pause
const togglePause = () => {
  isPaused = !isPaused;
  if (!isPaused) {
    setIntervalId = setInterval(initGame, 125); // Resume the game loop
  }
};

// Function to handle changes in snake direction based on keyboard input
const changeDirection = (e) => {
  if (e.key === " ") {
    // If spacebar is pressed
    isPaused = !isPaused; // Toggle game pause
    if (!isPaused) {
      // If the game is not paused
      setIntervalId = setInterval(initGame, 125); // Start the game loop
    } else {
      clearInterval(setIntervalId); // Pause the game loop
    }
    return;
  }

  // Update velocity based on arrow key presses, preventing reversing direction
  if (!isPaused) {
    // If the game is not paused, allow direction changes
    if (e.key === "ArrowUp" && velocityY !== 1) {
      velocityX = 0;
      velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY !== -1) {
      velocityX = 0;
      velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX !== 1) {
      velocityX = -1;
      velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX !== -1) {
      velocityX = 1;
      velocityY = 0;
    }
    initGame(); // Re-initialize the game with the updated direction
  }
};

// Function to initialize the game state and render updates to the game board
const initGame = () => {
  if (gameOver || isPaused) return; // If the game is over or paused, do nothing

  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`; // HTML markup for the food element

  // If the snake eats the food, update score and high score
  if (snakeX === foodX && snakeY === foodY) {
    changeFoodPosition(); // Change the position of the food
    snakeBody.push([foodX, foodY]); // Add new segment to snake's body
    score++; // Increment score

    // Update high score if current score exceeds it
    highScore = score >= highScore ? score : highScore;
    localStorage.setItem("high-score", highScore); // Store updated high score in local storage
    scoreElement.innerText = `Score: ${score}`; // Update displayed score
    highScoreElement.innerText = `High Score: ${highScore}`; // Update displayed high score
  }

  // Update snake's body segments positions
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }

  snakeBody[0] = [snakeX, snakeY]; // Update position of snake's head
  snakeX += velocityX; // Update snake's X coordinate
  snakeY += velocityY; // Update snake's Y coordinate

  // Check if snake hits the walls, if so, end the game
  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    gameOver = true;
  }

  // Render snake's body segments on the game board
  for (let i = 0; i < snakeBody.length; i++) {
    htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;

    // Check if the snake collides with itself, if so, end the game
    if (
      i !== 0 &&
      snakeBody[0][1] === snakeBody[i][1] &&
      snakeBody[0][0] === snakeBody[i][0]
    ) {
      gameOver = true;
    }
  }

  playBoard.innerHTML = htmlMarkup; // Render HTML markup on the game board
};

// Initialize food position
changeFoodPosition();

// Start game loop
setIntervalId = setInterval(initGame, 125);

// Listen for keyboard input to change snake direction
document.addEventListener("keydown", changeDirection);
