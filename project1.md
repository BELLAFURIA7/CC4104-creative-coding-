# Project 1 - An alternative visual way to represent a realtime clock

![Screenshot 2025-06-06 010408](https://github.com/user-attachments/assets/bc7699f8-5a4c-4cd6-a485-8bc9ee95c126)

The brief was to create a realtime clock in alternative and visually interesting way. I decided to create a rainfall simulator, where each second a drop of rain falls, and when it hits a minute the rainfall will increase and then decrease to one raindrop a second. I started off with the base of my code as a simple realtime clock, i took the code i used from the website GeeksforGeeks and i will link it below. 
[GeeksforGeeks - Basic realtime clock in p5.js](https://www.geeksforgeeks.org/how-to-make-digital-clock-in-p5-js/)

I actually found that my code would work without the visual representation of the clock itself in the background, however, i decided to keep it to ensure it was clear how the time was changing. To keep keep the current time the code:
'
var sec = second();
var min = minute();
var hrs = hour();
'
was used. These are used to decide when the raindrops fall and to update the time on the clock.

To control how heavy the rain was, i started off by making an if statement to detect a new second or minute. I used this:

if (min !== lastMin) {
  lastMin = min;
  rainBurst = 100; // start a burst of rain
}

When a minute is recognised, rainBurst will set the amount of rainfall to 100 frames heavier. To detect a second i added an 'else if' which will only display one raindrop. To actually draw the raindrops i made the stroke be a vertical line, where the y position increases on each frame creating the falling action. The code i wrote also ensures it loops back through the drops array and checks if the drop is off screen or not which helps the clock not crash. 

stroke (150,200,250);
for(let i = drops.length - 1; i >= 0; i--) {
    let d = drops[i];
    line (d.x,d.y,d.x,d.y + 10);
    d.y += d.speed;

    if(d.y > height){
      drops.splice(i,1);
    }
}

The most difficult part for me was the raindrops actually being drawn. I kept having issues with the raindrops not loading onto the screen. I believe if i were to do this again i would have added a ripple effect when the raindrops landed on the screen to make it look like they were falling into a puddle. My original idea was to have one ripple in the water and have it change intensity for each second, minute, hour, but i wanted to push myself and try something i knew id have a difficult time with. For alot of my work i resorted to the p5.js reference as it helped me to understand where i may have been going wrong with my code.

[See the experiment running here](/realtime_clock_2025_06_06_07_05_05/index.html)




