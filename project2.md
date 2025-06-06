# project 2 - A mouse driven painting tool with 4 different 'brush' tools

![Screenshot 2025-06-06 082155](https://github.com/user-attachments/assets/e6a0ffca-25a3-4282-9593-879ee1d0babb)

The brief was to create a drawing tool with 4 different brush modes. I started my code with a basic drawing tool i made in a lecture. I used keyPressed to assign each painting tool a different key. To tell the user what key did what i added text into the top of screen. To actually get the lines to draw i made a draw function which stated that when the mouse is being held down, mouseIsPressed, it will set the outline thickness and shade it starts with. 

I used an if function to set the different types of brush tools/line.

 if (currentBrush === "normal") {
      ellipse(mouseX, mouseY, 20); 
    } else if (currentBrush === "circle") {
      ellipse(mouseX, mouseY, 100); 
    } else if (currentBrush === "line") {
      line(pmouseX, pmouseY, mouseX, mouseY);
    } else if(currentBrush === "wiggly"){
      let offsetX = random(-10,10);
      let offsetY = random(-10,10);
      line(pmouseX + offsetX, pmouseY + offsetY, mouseX + offsetX, mouseY + offsetY)
    }

The brush normal creates an ellipse, or a small circle, the brush circle creates a larger circle, the brush line creates a smooth drawing tool which connects the previous and current mouse positions and the brush wiggly creates a shaky line which just randomly offsets the end points, making it look like sprinkles. 

When creating this code, i found the biggest issue i had was creating the line function, i originally wanted it to create a straight line between two points but it ended up creating a smooth line which i found more ideal for a drawing tool so it worked overall. I think if i were to create this again i would make a brush that created a shadow or blurring effect. 



