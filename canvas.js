const gameBoard = document.getElementById('canvas');
const ctx = gameBoard.getContext('2d');

const squareSize = 50;
const targetSize = 20;

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

//-- START GAME--
function startGame(){
    draw();
    document.addEventListener('keydown', e=>{
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
    document.addEventListener('keyup', e=>{ 
        console.log(dirDown);
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
startGame();
//--DRAW CANVAS--
function draw(){
    resetCanvas();
    ctx.fillStyle = 'red';
    ctx.fillRect(squareX, squareY, squareSize, squareSize);

    ctx.fillStyle = 'green';
    ctx.fillRect(targetX, targetY, targetSize, targetSize);

}
//--reset canvas--
function resetCanvas(){
    ctx.fillStyle = '#fff';
    ctx.fillRect = (0, 0, gameBoard.Width, gameBoard.height); 
}
//--MOVE SQUARE--
function moveSquare(){
    
}