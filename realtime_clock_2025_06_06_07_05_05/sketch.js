function setup() {

  // Create Canvas of given size
  createCanvas(480,480);
}

let drops=[];
let lastSec = -1;
let lastMin = -1;
let rainBurst = 0;

function draw() {

  // Set the background color + stroke weight
  background(0);
  strokeWeight(4);
  
  // Get the current second, minute and hours
  // and assign them to res variables
  var sec = second();
  var min = minute();
  var hrs = hour();
  
  // Check for AM or PM based on the
  // hours and store it in a variable
  var mer = hrs < 12 ? "AM":"PM";
  
  // Format the time so that leading
  // 0's are added when needed
  sec = formatting(sec);
  min = formatting(min);
  hrs = formatting(hrs % 12);
  
  fill(255); 
  textSize(48);
  textAlign(CENTER, CENTER);
  text(hrs + ":" + min + ":" + sec +
       " " + mer, width/2, height/2);
  
  if (min !== lastMin) {
  lastMin = min;
  rainBurst = 100;
}

if(rainBurst > 0){
  for(let i = 0; i < 5; i++){
    drops.push({x: random(width), y : 0, speed: random (4,7)}); 
 } 
  rainBurst --;
} else if (sec !== lastSec){
  lastSec = sec;
  drops.push({x : random(width), y: 0, speed: random(4,7)});
}
  stroke (150,200,250);
  for(let i = drops.length - 1; i >= 0; i--) {
      let d = drops[i];
      line (d.x,d.y,d.x,d.y + 10);
      d.y += d.speed;
  
  if(d.y > height){
    drops.splice(i,1);
  }
      }
  
}

function formatting(num){
  
  // Convert to int and check 
  // if less than 10
  if(int(num) < 10) {
    
    // Return the padded number
    return "0" + num;
  }
  
  // Return the original number if
  // padding is not required
  return num;
}