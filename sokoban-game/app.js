document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("game");
  const context = canvas.getContext("2d");
  const tileSize = 40;
  const levels = [
    `
    ############
#.@       .#
#$#   $$$ #
#   ## $  #
#$    $   #
#  $ ##   #
#  $     *#
###########
`,
    `
############
#.@       .#
#$#   $$$ #
#   ## $  #
#$    $   #
#  $ ##   #
#  $    * #
###########
`,
    // Dodaj więcej poziomów tutaj
  ];
  const playerColor = "#3399ff";
  const boxColor = "#ff9933";
  const goalColor = "#66cc00";
  const wallColor = "#333";

  let playerPos = { x: 0, y: 0 };
  let boxes = [];
  let goals = [];
  let walls = [];
  let width = 0;
  let height = 0;
  let currentLevel = 0;
  let score = 0;

  const scoreElement = document.getElementById("score-value");
  const messageElement = document.getElementById("message");

  function initializeLevel() {
    let row = 0;
    let col = 0;

    const level = levels[currentLevel].trim();

    boxes = [];
    goals = [];
    walls = [];

    level.split("\n").forEach((line) => {
      col = 0;
      line
        .trim()
        .split("")
        .forEach((char) => {
          if (char === "#") {
            walls.push({ x: col * tileSize, y: row * tileSize });
          } else if (char === "@") {
            playerPos = { x: col * tileSize, y: row * tileSize };
          } else if (char === "$") {
            boxes.push({ x: col * tileSize, y: row * tileSize });
          } else if (char === "*") {
            boxes.push({ x: col * tileSize, y: row * tileSize });
            goals.push({ x: col * tileSize, y: row * tileSize });
          } else if (char === ".") {
            goals.push({ x: col * tileSize, y: row * tileSize });
          }
          col++;
        });
      row++;
      if (col > width) width = col;
    });

    height = row;
    scoreElement.textContent = score;
    messageElement.textContent = "Use arrow keys to move.";
  }

  function drawPlayer() {
    context.fillStyle = playerColor;
    context.fillRect(
      playerPos.x + 5,
      playerPos.y + 5,
      tileSize - 10,
      tileSize - 10
    );
  }

  function drawBox(x, y) {
    context.fillStyle = boxColor;
    context.fillRect(x + 5, y + 5, tileSize - 10, tileSize - 10);
  }

  function drawGoal(x, y) {
    context.fillStyle = goalColor;
    context.beginPath();
    context.arc(
      x + tileSize / 2,
      y + tileSize / 2,
      tileSize / 4,
      0,
      2 * Math.PI
    );
    context.fill();
  }

  function drawWall(x, y) {
    context.fillStyle = wallColor;
    context.fillRect(x, y, tileSize, tileSize);
  }

  function drawLevel() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    walls.forEach((wall) => drawWall(wall.x, wall.y));
    boxes.forEach((box) => drawBox(box.x, box.y));
    goals.forEach((goal) => drawGoal(goal.x, goal.y));
    drawPlayer();
  }

  function isColliding(x, y, object) {
    return x === object.x && y === object.y;
  }

  function movePlayer(dx, dy) {
    const newX = playerPos.x + dx;
    const newY = playerPos.y + dy;

    // Sprawdzenie, czy nowa pozycja mieści się w granicach planszy
    if (
      newX < 0 ||
      newY < 0 ||
      newX >= width * tileSize ||
      newY >= height * tileSize
    )
      return;

    // Sprawdzenie, czy nowa pozycja zawiera ścianę
    if (walls.some((wall) => isColliding(newX, newY, wall))) return;

    // Sprawdzenie, czy nowa pozycja zawiera skrzynkę, a jeśli tak, to przesuń ją
    const boxIndex = boxes.findIndex((box) =>
      isColliding(newX, newY, box)
    );
    if (boxIndex !== -1) {
      const newBoxX = boxes[boxIndex].x + dx;
      const newBoxY = boxes[boxIndex].y + dy;

      // Sprawdzenie, czy nowa pozycja dla skrzynki mieści się w granicach i nie zawiera ściany ani innej skrzynki
      if (
        newBoxX < 0 ||
        newBoxY < 0 ||
        newBoxX >= width * tileSize ||
        newBoxY >= height * tileSize ||
        walls.some((wall) => isColliding(newBoxX, newBoxY, wall)) ||
        boxes.some((box) => isColliding(newBoxX, newBoxY, box))
      )
        return;

      // Przesunięcie skrzynki
      boxes[boxIndex].x = newBoxX;
      boxes[boxIndex].y = newBoxY;
    }

    // Przesunięcie gracza
    playerPos.x = newX;
    playerPos.y = newY;

    drawLevel();
  }

  function checkWin() {
    return (
      boxes.length === goals.length &&
      boxes.every((box) =>
        goals.some((goal) => isColliding(box.x, box.y, goal))
      )
    );
  }

  function showWinMessage() {
    messageElement.textContent = "Congratulations! You win!";
    messageElement.style.color = "green";
    score += 100; // Zwiększenie wyniku za wygraną
    scoreElement.textContent = score;
    if (currentLevel < levels.length - 1) {
      setTimeout(() => {
        currentLevel++;
        initializeLevel();
        drawLevel();
      }, 1000); // Załaduj kolejny poziom po 1 sekundzie
    } else {
      messageElement.textContent = "You have completed all levels!";
    }
  }

  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowUp":
        movePlayer(0, -tileSize);
        break;
      case "ArrowDown":
        movePlayer(0, tileSize);
        break;
      case "ArrowLeft":
        movePlayer(-tileSize, 0);
        break;
      case "ArrowRight":
        movePlayer(tileSize, 0);
        break;
      case "r":
        restartGame();
        break;
    }

    if (checkWin()) showWinMessage();
  }

  function restartGame() {
    currentLevel = 0;
    score = 0;
    initializeLevel();
    drawLevel();
  }

  initializeLevel();
  drawLevel();
  document.addEventListener("keydown", handleKeyDown);
});