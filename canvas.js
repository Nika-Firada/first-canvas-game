const gameBoard = document.getElementById('canvas');
const ctx = gameBoard.getContext('2d');
const start = document.getElementById('startGame');


const squareSize = 50;
const targetSize = 20;

let score = 0;
let time = 3;
let total = document.getElementById('p');

//--MOVE--
let squareX = 50;
let squareY = 100;
let targetX = 50;
let targetY = 100;
//--DIRECTIONS--
let dirUp = false;
let dirDown = false;
let dirRight = false;
let dirLeft = false;
//--- move square consts
const moveSpeed = 4;

//-- START GAME--
function startGame() {
    moveTarget();
    draw();
    moveSquare();
    //
    gameOver();
    //
    document.addEventListener('keydown', e => {
      const { code } = e;
      if(code === 'ArrowUp'){
        dirUp = true;
      }
      if(code === 'ArrowDown'){
        dirDown = true;
      }
      if(code === 'ArrowRight'){
        dirRight = true;
      }
      if(code === 'ArrowLeft'){
        dirLeft = true;
      }
    });
    document.addEventListener('keyup', e => {
      const { code } = e;
      if(code === 'ArrowUp'){
        dirUp = false;
      }
      if(code === 'ArrowDown'){
        dirDown = false;
      }
      if(code === 'ArrowRight'){
        dirRight = false;
      }
      if(code === 'ArrowLeft'){
        dirLeft = false;
      }
    });
  }
  start.addEventListener('click', startGame);
  //startGame();


  //--draw---
  function draw() {
    resetCanvas();
    ctx.fillStyle = 'red';
    ctx.fillRect(squareX, squareY, squareSize, squareSize);
  
    ctx.fillStyle = 'green';
    ctx.fillRect(targetX, targetY, targetSize, targetSize);

    // scores--timer--
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000"
    ctx.fillText(`Score: ${score}`, 20, 20);
    ctx.fillText(`time: ${time}`, 120, 20)
  }

  ///---reset---
  function resetCanvas() {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, gameBoard.width, gameBoard.height);
  }

  //---move Square--
  function moveSquare(){
    if(dirUp){
        squareY -= moveSpeed;
    }
    if(dirDown){
        squareY += moveSpeed;
    }
    if(dirLeft){
        squareX -= moveSpeed;
    }
    if(dirRight){
        squareX += moveSpeed;
    }
    if(squareX + squareSize > gameBoard.width){
        squareX = gameBoard.width - squareSize;
    }
    if(squareY + squareSize > gameBoard.height){
        squareY = gameBoard.height - squareSize;
    }
    squareX = Math.max(0, squareX);
    squareY = Math.max(0, squareY);
    /////
    if(isEaten()){
        moveTarget();
        score++;
    }
    draw();
    requestAnimationFrame(moveSquare);
  }

  //-- get target random x-y
  function getTargetRandomXY(){
      const x = Math.floor(Math.random() * (gameBoard.width - targetSize));
      const y = Math.floor(Math.random() * (gameBoard.height - targetSize));
      return{
          x,
          y,
      }
  }
  //----move target---
  function moveTarget(){
      const {x, y} = getTargetRandomXY();
      targetY = y;
      targetX = x;
  }
  //--eating--
  function isEaten(){
      const squareRight = squareX + squareSize;
      const squareBottom = squareY + squareSize;
      const targetRight = targetX + targetSize;
      const targetBottom = targetY + targetSize;

      const caseY = squareBottom > targetBottom && squareY < targetY;
      const caseX = squareRight > targetRight && squareX < targetX;
      return caseY && caseX;
  }

  
///////////////
function gameOver(){
    const timeOut = setInterval(function(){
        time--;
        if (time===0){
            clearInterval(timeOut);
            total.classList.add('open');
            total.innerHTML += `Game over! total score = ${score}`;

        }
    }, 1000);
}



