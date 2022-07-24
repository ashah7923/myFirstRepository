/* variables
- marioImage: mario
- myXPos/myYPos: mario's location
- pipeX/pipeY: pipe's location
*/

let marioImage;
let myXPos = 100;
let myYPos = 275;
let pipeX = 400;
let pipeY = 300 



let marioLeft, marioRight, marioTop, marioBottom; // this will track the coordinates of mario's edges
let pipeLeft, pipeRight, pipeTop, pipeBottom; // this will track the coordinates of the edges of the pipes


ex1 = 250   // framework for the ground
ey1 = 400
ew1 = 500
eh1 = 200


let score = 0;



function preload() {    // this function will preload the mario image
    marioImage = loadImage('images/mario.png');
}

function setup() {
    createCanvas(500,500);
    imageMode(CENTER);
    rectMode(CENTER);

}


function draw() {
background(255, 215, 105);

fill(255, 0, 0); // create score 
textSize(20);
text("SCORE: " + score, 5, 20);

  fill(44, 176, 26);    // these are the pipes, and how they'll continue to move
  rect(pipeX, pipeY, 60, 250);
  rect(pipeX, pipeY - 120, 80, 20);
  pipeX = pipeX - 3;

  if(pipeX<0){  // if the pipe leaves the screen, it will regenerate at x = 400
    pipeX = 400;
    pipeY = random(230, 400);    

  }

  
 fill(209, 136, 63)   // this is the ground
 rect(ex1,ey1,ew1,eh1)  



image(marioImage, myXPos, myYPos, 50, 50); // this renders mario


if(keyIsDown(UP_ARROW)) { //if you press the up arrow, mario goes up
    myYPos -= 6;
}

if (myYPos < 275) { // gravity animation - mario will eventually go down to his starting position if he goes up
    myYPos += 2;
}

marioLeft = myXPos - 25; // declaring mario's edges
marioRight = myXPos + 25;
marioTop = myYPos - 25;
marioBottom = myYPos + 25;

pipeLeft = pipeX - 30; // declaring pipes edges
pipeRight = pipeX + 30;
pipeTop = pipeY - 125;
pipeBottom = pipeY + 125;

if (marioRight < pipeLeft || marioLeft > pipeRight || marioBottom < pipeTop) { // collision theory

} else {
    score = 0;
    pipeX = 800;
}

if (pipeX > 400) { // the user has time to read the text since the x-coordinate of the pipe is coming from 800
    text("You lost! Score reset. Try again!", 180, 30);

}

if (myXPos == pipeX) { // whenever mario passes the pipe, score increases by 1
    score += 1;
}

if (myYPos < 25) { // in order to make sure the user doesn't just gather points by leaving the screen and staying there, this code has been implemented
    myYPos = 25;
    fill(random(255), random(255), random(255));
    text("GET OFF THE TOP!", 250, 50);
}

}

