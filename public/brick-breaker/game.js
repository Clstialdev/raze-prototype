const svgRoot = document.getElementById("svgRoot");
const ball = document.getElementById("ball");
const pad = document.getElementById("pad");
const levelText = document.getElementById("levelText");
const discountText = document.getElementById("discountText");
const gameOverText = document.getElementById("game-over");
YtextPosition = -svgRoot.clientHeight + 50;
XtextPosition = svgRoot.clientWidth - 200;
levelText.setAttribute("y", YtextPosition);
discountText.setAttribute("y", YtextPosition);
discountText.setAttribute("x", XtextPosition);

let gameStarted = false;
let brickPositions = [];
let Walls = [];
let level = 1;
let discount = 0;
let discountCode = "";
let dx = 0; //Ball Speed
let dy = 7; //Ball Speed
let originalBallX = svgRoot.clientWidth / 2;
let originalBallY = 25;
let originalPadX = svgRoot.clientWidth / 2 - 75;
let hitCount = 0; // Variable to keep track of the number of hits
const MAX_SPEED = 20; // Maximum speed of the ball

pad.setAttribute("x", originalPadX);
ball.setAttribute("cx", originalBallX);

const brickColor = "#52FA9B";

function generateBrickPositions(min, max) {
  const numRows = 5; // The number of rows of bricks
  const numCols = 21; // The number of columns of bricks
  let svgWidth = svgRoot.clientWidth;
  const totalBricksWidth = numCols * 35; // The total width of all bricks without any padding
  const availableWidth = svgWidth - 40; // The available width for bricks (subtracting 20 pixels from each side)
  let brickWidth, brickPadding;

  // Adjust brick width and padding based on available width
  if (availableWidth < totalBricksWidth) {
    brickWidth = Math.floor(availableWidth / numCols);
    brickPadding = Math.floor(brickWidth / 6);
  } else {
    brickWidth = 35;
    brickPadding = 10;
  }

  const brickHeight = 20; // The height of each brick
  const brickOffsetTop =
    svgRoot.clientHeight - numRows * (brickHeight + brickPadding) - 100; // The offset of the top row of bricks from the top of the screen
  const brickOffsetLeft = Math.floor(
    (svgWidth - (numCols * (brickWidth + brickPadding) - brickPadding)) / 2
  ); // The offset of the leftmost column of bricks from the left of the screen

  // Create an empty matrix
  let brickMatrix = [];
  for (let row = 0; row < numRows; row++) {
    let rowArray = [];
    for (let col = 0; col < numCols; col++) {
      rowArray.push(0);
    }
    brickMatrix.push(rowArray);
  }

  // Generate a random number of bricks to add
  let numBricks = Math.floor(Math.random() * (max - min + 1)) + min;

  if (level === 1) {
    brickMatrix = [
      [0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1],
      [0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    ];
  } else {
    // Set the specified number of cells to 1 at random positions
    for (let i = 0; i < numBricks; i++) {
      let row = Math.floor(Math.random() * numRows);
      let col = Math.floor(Math.random() * numCols);
      brickMatrix[row][col] = 1;
    }
  }

  // Add the bricks as SVG elements
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (brickMatrix[row][col] === 1) {
        let brickX = col * (brickWidth + brickPadding) + brickOffsetLeft;
        let brickY = row * (brickHeight + brickPadding) + brickOffsetTop;
        let brick = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        brick.setAttribute("x", brickX);
        brick.setAttribute("y", brickY);
        brick.setAttribute("width", brickWidth);
        brick.setAttribute("height", brickHeight);
        brick.setAttribute("fill", brickColor);
        brick.setAttribute("class", "brick");
        let brickID = `brick_${row}_${col}`; // Create a unique ID for each brick
        brick.setAttribute("id", brickID); // Add ID attribute to the brick
        svgRoot.appendChild(brick);
        brickPositions.push({
          id: brickID, // Add ID to the brick position object
          top: brickY + brickHeight,
          right: brickX + brickWidth,
          bottom: brickY,
          left: brickX,
        });
      }
    }
  }

  //  set the level number in the svg text
  levelText.textContent = "Level " + level;
  discountText.textContent = discount + "% Code: " + discountCode;
}

function generateWalls(numWalls, wallHeight) {
  const wallOffsetTop = svgRoot.clientHeight / 2; // The offset of the top of the walls from the top of the screen
  const wallY = wallOffsetTop + wallHeight + 10; // The y position of the walls (same for all walls)
  const svgWidth = svgRoot.clientWidth; // Width of the SVG root element
  const maxPadding = Math.floor(200); // Maximum padding between walls
  const maxWallWidth =
    (svgWidth - ((numWalls - 1) * maxPadding) / 2) / numWalls; // Maximum wall width

  for (let i = 0; i < numWalls; i++) {
    const randomPadding = Math.floor(Math.random() * maxPadding); // Random padding between 0 and maxPadding
    const wallWidth = Math.floor(Math.random() * (maxWallWidth - 50) + 50); // Random wall width between 50 and maxWallWidth
    let wallOffsetLeft = 0;
    if (i === 0) {
      wallOffsetLeft = Math.floor(Math.random() * maxPadding * 2);
    } else {
      wallOffsetLeft = Walls[i - 1].right + randomPadding;
    }
    let wallX = wallOffsetLeft;
    let wall = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    wall.setAttribute("x", wallX);
    wall.setAttribute("y", wallY);
    wall.setAttribute("width", wallWidth);
    wall.setAttribute("height", wallHeight);
    // wall.setAttribute("fill", "#FF4A37");
    wall.setAttribute("class", "wall");
    let wallID = `wall_${i}`; // Create a unique ID for each wall
    wall.setAttribute("id", wallID); // Add ID attribute to the wall
    svgRoot.appendChild(wall);
    Walls.push({
      id: wallID, // Add ID to the wall object
      top: wallY + wallHeight,
      right: wallX + wallWidth,
      bottom: wallY,
      left: wallX,
    });
  }

  console.log(Walls);
}

function updatePaddlePosition(x) {
  if (gameStarted) {
    let offsetLeft = (window.innerWidth - svgRoot.clientWidth) / 2;
    pad.setAttribute("x", x - offsetLeft);
  }
}

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
function gameOver(dy) {
  gameOverText.classList.remove("hidden");
  level = 1;
  gameStarted = false;
  ball.setAttribute("cx", originalBallX);
  ball.setAttribute("cy", originalBallY);
  pad.setAttribute("x", originalPadX);
  Walls = [];
  brickPositions = [];
  dx = 0;
  dy = 7;

  // alert("Game Over!");
  // document.location.reload();
  return -dy;
}

function startGame() {
  gameOverText.classList.add("hidden");
  removeElementsByClass("brick");
  removeElementsByClass("wall");
  if (!gameStarted) {
    generateBrickPositions(20, 50);
    generateWalls(5, 20);
  }
  gameStarted = true;
}

function keepBallMoving() {
  if (gameStarted) {
    const ballRadius = parseFloat(ball.getAttribute("r"));
    const padX = parseFloat(pad.getAttribute("x"));
    const padY = parseFloat(pad.getAttribute("y"));
    const padWidth = parseFloat(pad.getAttribute("width"));
    const padHeight = parseFloat(pad.getAttribute("height"));

    let ballX = parseFloat(ball.getAttribute("cx"));
    let ballY = parseFloat(ball.getAttribute("cy"));

    // Reverse the direction if ball hits left or right wall
    if (ballX - ballRadius < 0 || ballX + ballRadius > svgRoot.clientWidth) {
      dx = -dx;
    }

    // Reverse the direction if ball hits top wall
    if (ballY + ballRadius > svgRoot.clientHeight) {
      dy = -dy;
    }
    // Reverse the direction if ball hits paddle
    if (
      ballY + ballRadius <= padY + padHeight + 15 &&
      ballX >= padX &&
      ballX <= padX + padWidth
    ) {
      dy = -dy;
      dx = ((ballX - padWidth / 2 - padX) * Math.abs(dy)) / 100 + dx * 0.85;
      // We increase the ball speed on each paddle bounce
      if (
        hitCount % 3 == 0 &&
        Math.abs(dx) < MAX_SPEED &&
        Math.abs(dy) < MAX_SPEED
      ) {
        dx *= 1.03; // Increase speed by 3%
        dy *= 1.03;
      }
      hitCount++;
    }

    // Check collision with bricks
    if (typeof brickPositions[0] !== "undefined") {
      for (let i = 0; i < brickPositions.length; i++) {
        const brick = document.getElementById(brickPositions[i].id);
        const brickPos = brickPositions[i];
        if (
          ballY + ballRadius >= brickPos.bottom &&
          ballY - ballRadius <= brickPos.top &&
          ballX + ballRadius >= brickPos.left &&
          ballX - ballRadius <= brickPos.right
        ) {
          // Collision detected, remove brick and reverse ball direction
          brick.parentNode.removeChild(brick);
          brickPositions.splice(i, 1);
          dy = -dy;
        }
      }
    }

    // Check collision with walls
    if (typeof Walls[0] !== "undefined") {
      for (let i = 0; i < Walls.length; i++) {
        const wall = document.getElementById(Walls[i].id);
        const wallPos = Walls[i];
        if (
          ballY + ballRadius >= wallPos.bottom &&
          ballY - ballRadius <= wallPos.top &&
          ballX + ballRadius >= wallPos.left &&
          ballX - ballRadius <= wallPos.right
        ) {
          dy = -dy;
        }
      }
    }

    // Update ball position
    ballX += dx;
    ballY += dy;
    ball.setAttribute("cx", ballX);
    ball.setAttribute("cy", ballY);

    // End game if ball hits the bottom
    if (ballY + ballRadius <= 0) {
      dy = gameOver(dy);
    }

    // Check if all bricks are gone
    if (brickPositions.length === 0 && gameStarted) {
      nextLevel();
    }
  }

  // Call the function again on the next frame
  window.requestAnimationFrame(keepBallMoving);
}

function nextLevel() {
  //   gameStarted = false;
  removeElementsByClass("brick");
  removeElementsByClass("wall");
  level += 1;
  discount += 2;
  switch (level) {
    case 2:
      discountCode = "DeuceJuice";
      break;

    case 3:
      discountCode = "TinyTaters";
      break;

    case 4:
      discountCode = "HalfDozen";
      break;

    case 5:
      discountCode = "AlmostThere";
      break;

    case 6:
      discountCode = "ADime";
      break;

    case 7:
      discountCode = "SillyTwelve";
      break;

    case 8:
      discountCode = "4Teens1Question";
      break;

    case 9:
      discountCode = "LegalToDrive";
      break;

    case 10:
      discountCode = "FullyLegal;)";
      break;

    case 11:
      discountCode = "TwentyShadesOfDiscount";
      break;

    default:
      break;
  }
  generateBrickPositions(20, 50);
  Walls = [];
  generateWalls(5, 20);

  //   pad.setAttribute("x", "100");
  //   pad.setAttribute("y", "0");
  //   ball.setAttribute("cx", originalBallX);
  //   ball.setAttribute("cy", originalBallY);
}

document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  updatePaddlePosition(mouseX - 150 / 2); // we subtract half of the paddleWidth
});

let isDragging = false;
let startPosition = { x: 0, y: 0 };
let offset = { x: 0, y: 0 };

document.addEventListener("touchstart", (event) => {
  const touch = event.touches[0];
  startPosition = { x: touch.clientX, y: touch.clientY };
  isDragging = true;
});

document.addEventListener("touchmove", (event) => {
  if (!isDragging) return;

  const touch = event.touches[0];
  const currentX = touch.clientX;

  // Update the element's position based on the touch movement
  updatePaddlePosition(currentX - startPosition.x - offset.x + 150 / 2);

  // event.preventDefault();
});

document.addEventListener("touchend", () => {
  isDragging = false;
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    if (!gameStarted) {
      startGame();
    }
  }
});

const taptoplay = document.getElementById("taptoplay");

if (taptoplay) {
  taptoplay.addEventListener("click", () => {
    if (!gameStarted) {
      startGame();
    }
  });
}

// Start the game loop
keepBallMoving();
