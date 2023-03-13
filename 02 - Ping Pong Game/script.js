// select the canvas tag
// https://www.youtube.com/watch?v=N7NU9GRpvkE

const canvas = document.getElementById("my-game");
const context = canvas.getContext("2d");

// drawing the game using rectagle function
function drawRect(x, y, w, h, color){
    context.fillStyle = color;
    context.fillRect(x, y, w ,h);
}


// computer paddle
const com = {
    x : canvas.width/2 - 50/2,
    y : 10,
    width : 50,
    height : 10,
    color : 'white',
    score : 0
}


const user = {
    x : canvas.width/2 - 50/2,
    y : canvas.height - 10 - 10,
    width : 50,
    height : 10,
    color : 'white',
    score : 0
}


function centerLine(){
    context.beginPath();
    context.setLineDash([9])
    context.moveTo(0, canvas.height/2)
    context.lineTo(canvas.width, canvas.height/2)
    context.strokeStyle = 'white';
    context.stroke()
}



// Draw a Circle
function drawCircle(x,y,r,color){
    context.fillStyle = color
    context.beginPath()
    context.arc(x,y,r,0,Math.PI*2,false)
    context.closePath()
    context.fill()
}

// Create a ball
const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    speed:1,
    velocityX : 5,
    velocityY : 5,
    color: "white"
}


// scores
function drawText(text,x,y,color){
    context.fillStyle = color
    context.font = "32px josefin sans"
    context.fillText(text,x,y)
}



// render the Game
function makeGameUI(){

    // Make canvas
    drawRect(0,0,400,600,"black");

    // computer paddle
    drawRect(com.x,com.y,com.width,com.height,com.color);
    // user paddle
    drawRect(user.x,user.y,user.width,user.height,user.color);

    // Center line
    centerLine();

    //create a ball
    drawCircle(ball.x,ball.y,ball.radius,ball.color);

    // scores of com and user
    drawText(com.score,20,canvas.height/2 - 30);
    drawText(user.score,20,canvas.height/2  + 50);
}

// control the user paddle

canvas.addEventListener("mousemove", movepaddle);

function movepaddle(e){
    let rect = canvas.getBoundingClientRect();
    user.x = e.clientX - rect.left - user.width/2;

}

// collision detection

function collision(ball, player){
    ball.top = ball.y - ball.radius;
    ball.bottom = ball.y + ball.radius;
    ball.left = ball.x - ball.radius;
    ball.right = ball.x + ball.radius;

    player.top = player.y;
    player.bottom = player.y + player.height;

    
}

function update(){
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    if(ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0){
        ball.velocityX = -ball.velocityX;
    }
    
    
}


function start(){

    update();
    makeGameUI();
    
}

const loop = setInterval(start, 1000/50);
