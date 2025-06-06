let sw = 5;
let shade = 240;
let currentBrush = "normal"; // default brush

function setup() {
  createCanvas(400, 400);
  background(220);
  colorMode(HSB);
  fill(0, 0, 0);
  text("press E to change size", width / 3, 20);
  text("press C to change colour", width / 3, 35);
  text("press S to use large circle brush", width / 3, 50);
  text("press L to switch to line brush", width / 3, 65);
  text("press N for small round brush", width / 3, 80);
  text("press W for sprinkles", width/ 3, 95)
  text("press SPACE to clear", width / 3, 110);
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(sw);
    stroke(shade, 100, 100);
    fill(shade, 100, 100);

    if (currentBrush === "normal") {
      ellipse(mouseX, mouseY, 20); // smaller brush
    } else if (currentBrush === "circle") {
      ellipse(mouseX, mouseY, 100); // big brush
    } else if (currentBrush === "line") {
      line(pmouseX, pmouseY, mouseX, mouseY);
    } else if(currentBrush === "wiggly"){
      let offsetX = random(-10,10);
      let offsetY = random(-10,10);
      line(pmouseX + offsetX, pmouseY + offsetY, mouseX + offsetX, mouseY + offsetY)
    }
  }
}

// ✅ Use this to react only when a key is pressed once
function keyPressed() {
  if (key === " ") {
    background(220);
  } else if (key === "e") {
    sw = (sw + 20) % 100;
  } else if (key === "c") {
    shade = (shade + 10) % 360;
  } else if (key === "s") {
    currentBrush = "circle";
  } else if (key === "l") {
    currentBrush = "line";
  } else if (key === "n") {
    currentBrush = "normal";
  } else if(key ==="w"){
    currentBrush = "wiggly";
  }
}