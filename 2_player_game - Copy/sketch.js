let target;
let beat = 0;
let beatSpeed = 5;
let beatCounter = 0;
let endGame= false; 
let totalBeats = 20;  
let playerTurn = 0;
let colour;
let score1 = 0;
let score2 =0;
let currentColour ="";
let note1;
let note2;


function preload(){
  note1 = loadSound('note1.wav')
  note2 = loadSound('note2.wav')
}

function setup() {
  createCanvas(400, 400);
  target=width / 2;
  textAlign(CENTER);
  textSize(16);
  setRandomColour();
}

function draw() {
  background(16, 1, 48);
  
  //creating target zone 
  fill(colour)
  
  let rectWidth = 40;
  let rectHeight = 60;
  
  rect(target - rectWidth /2, height/2 -rectHeight /2, rectWidth, rectHeight)

  //creating beat
fill(3, 252, 182)
  circle(beat,height/2, 30);
  
  if (!endGame){
    beat += beatSpeed;
  
  if (beat > width){
    beat = 0
    beatCounter++;
    playerTurn = 1- playerTurn;
    setRandomColour();
    
    if (beatCounter >= totalBeats){
    endGame = true;  
    }    
  }
}
  
  fill(255);
  text("player 1 pink:" + score1, width / 4, 30)
  text("player 2 yellow:"+ score2, 3* width / 4, 30)
  
      
  if(endGame){
    text("Game over!",width/2, height- 70)
    
  if (score1 > score2){
    text("player 1 wins!", width / 2, height - 40)
      }
    else if (score2 > score1){
      text("player 2 wins!", width / 2, height - 40)     
    }
    else {
      text("Its a tie!", width / 2, height - 40)
    } 
  }
}

function setRandomColour(){
  if (random(1)< 0.5){
    colour = color(255, 3, 255)
    currentColour ="player1";
  } else{
    colour = color(244, 252, 3)
    currentColour = "player2";
  }
  
}

function keyPressed() {
  if (key==' '){
   let rectWidth = 40;
    let rectX = target - rectWidth / 2;
    
   let onTarget = beat >= rectX && beat <= rectX + rectWidth;
  
    if(!endGame && onTarget){
      
      if (currentColour ==="player1"){
        score1++;
        if (note1) note1.play();
      } else if (currentColour === "player2"){
        score2++;
        if (note2) note2.play();
      }
     }
    }
  }
  

