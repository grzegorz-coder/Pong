const boardBorder = "black"
const boardBackground = "white"
const snake_col = "gold"
const snake_border = "black"

let racket1X = 10;
let racket1Y = 75;
let racket2X = 10;
let racket2Y = 75;

let score1= 0;
let score = 0;

let targetX = 240;
let targetY = 120;
let dxBall = 10;
let dyBall = 10;
let ballRadius = 10;

let downPressed = false;
let upPressed = false;
let downPressed2 = false;
let upPressed2 = false;

const gameBoard = document.querySelector(".game-window");
const gameBoard_ctx = gameBoard.getContext("2d");

let racket1Z = (gameBoard.height - racket1Y)/2;
let racket2Z = (gameBoard.height - racket2Y)/2;

main(); 

document.addEventListener("keydown", move_rackets, false)
document.addEventListener("keyup", dont_move_rackets, false)
document.addEventListener("keydown", move_rackets2, false)
document.addEventListener("keyup", dont_move_rackets2, false)

function main(){
    
    end_game();
    setTimeout(function onTick()
    {
        clearPongBoard();
        drawball();
        moveRacket1();
        moveRacket2();
        drawRacket1();
        drawRacket2();
        main();
    }, 50)
    
}

function clearPongBoard() {
    gameBoard_ctx.fillStyle = boardBackground;
    gameBoard_ctx.strokeStyle = boardBorder;
    gameBoard_ctx.fillRect(0, 0, gameBoard.width, gameBoard.height);
    gameBoard_ctx.strokeRect(0, 0, gameBoard.width, gameBoard.height);
}

function drawRacket1()
{
   gameBoard_ctx.beginPath();
   gameBoard_ctx.rect(390, racket1Z, racket1X, racket1Y);
   gameBoard_ctx.fillStyle = "gold";
   gameBoard_ctx.fill();
   gameBoard_ctx.closePath();
}

function drawRacket2()
{
   gameBoard_ctx.beginPath();
   gameBoard_ctx.rect(0, racket2Z, racket2X, racket2Y);
   gameBoard_ctx.fillStyle = "gold";
   gameBoard_ctx.fill();
   gameBoard_ctx.closePath();
}

function drawball()
{
    gameBoard_ctx.clearRect(0,0, gameBoard.width, gameBoard.height)
    gameBoard_ctx.beginPath()
    gameBoard_ctx.fillStyle = "green";
    gameBoard_ctx.arc(targetX, targetY, ballRadius, 0, Math.PI*2)
    gameBoard_ctx.fill()
    gameBoard_ctx.closePath()
    targetX+=dxBall
    targetY+=dyBall
    if(targetY + dyBall > gameBoard.height - ballRadius || targetY+dyBall < ballRadius ) {
        
        dyBall = -dyBall;
    }
    if(targetX + dxBall > gameBoard.width - ballRadius || targetX+dxBall < ballRadius){ 
        if((targetY+dyBall>racket2Z && targetY+dyBall < racket2Y+racket2Z) || (targetY+dyBall>racket1Z && targetY+dyBall < racket1Y+racket1Z)){
        dxBall = -dxBall;
        }
        else if (targetX+dxBall > gameBoard.width - ballRadius) {
            score = score+=10;
            document.getElementById('score').innerHTML = score;
            targetX = gameBall(30,200); 
            targetY = gameBall(30,200);
            
        } else if (targetX+dxBall < ballRadius) {
            score1 = score1+=10;           
            document.getElementById('score1').innerHTML = score1;
            targetX = gameBall(30,200); 
            targetY = gameBall(30,200);
            
        }
            
        }
    }
   
function end_game() 
    {
        if(score === 100 && score1 < 100) {
            document.location.reload();
            alert("Game over, the winner is Player 1");
            
        }
        else if (score <100 && score1 === 100) {
            document.location.reload();
            alert("Game over, the winner is Player 2");
        }
    }

function gameBall(min, max)
    {
        return Math.round((Math.random() * (max-min) + min) / 10) * 10;
    }
    


function move_rackets(e) 
    {
        if(e.key == "Up" || e.key == "ArrowUp") {
            upPressed = true;
        }
        else if(e.key == "Down" || e.key == "ArrowDown") 
       {
            downPressed = true;
        }
    }
function dont_move_rackets(e) 
    {
        if(e.key == "Up" || e.key == "ArrowUp") {
            upPressed = false;
        }
        else if(e.key == "Down" || e.key == "ArrowDown") 
       {
            downPressed = false;
        }
    }

function move_rackets2(e) 
    {
        if(e.key == "w" ) {
            upPressed2 = true;
        }
        else if(e.key == "s") 
       {
            downPressed2 = true;
        }
    }
function dont_move_rackets2(e) 
    {
        if(e.key == "w") {
            upPressed2 = false;
        }
        else if(e.key == "s") 
       {
            downPressed2 = false;
        }
    }


function moveRacket1() {
        gameBoard_ctx.fillStyle = "hsl(0, 0%, 0%, 0.1)";
        gameBoard_ctx.fillRect(0, 0, gameBoard.width, gameBoard.height);
        drawRacket1(); 
        if(downPressed) {
           racket1Z += 10;
           if (racket1Z + racket1Y > gameBoard.height){
               racket1Z = gameBoard.height - racket1Y-2;
           }
        }
        else if(upPressed) {
           racket1Z -= 10;
           if (racket1Z < 2){
               racket1Z = 2;
           }
        }    
       }

function moveRacket2() {
        gameBoard_ctx.fillStyle = "hsl(0, 0%, 0%, 0.1)";
        gameBoard_ctx.fillRect(0, 0, gameBoard.width, gameBoard.height);
        drawRacket1(); 
        if(downPressed2) {
           racket2Z += 10;
           if (racket2Z + racket2Y > gameBoard.height){
               racket2Z = gameBoard.height - racket2Y-2;
           }
        }
        else if(upPressed2) {
           racket2Z -= 10;
           if (racket2Z < 2){
               racket2Z = 2;
           }
        }    
       }