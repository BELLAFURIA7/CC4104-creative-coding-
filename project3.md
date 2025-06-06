# Project 3 - One key game for two players with a clear win state 

![Screenshot 2025-06-06 230907](https://github.com/user-attachments/assets/b29d9df9-8df2-4b34-85bc-39805298e782)

The brief for this task was to create a two player game using only one key with a clear win state. I started by creating the visual elements such as the rectangle/target. I used rect to create the rectangle and i used circle to represent the the beat that moves across the screen that the players have to follow. When the beat reaches the other side of the screen, it resets to 0 and the beat will randomly change colour. I created a setRandomColour function that randomizes the colour as i wanted the game to be a reaction game. I used an if statement which randomizes and assigns the turn to either player one or player two when the colour changes. 

To actually create the one key game aspect, i used the keyPressed function. When the spacebar is pressed it checks wether the beat is currently inside the boundaries of the target by checking each side of the target. If the beat is currently inside the target, then the colour of the target assigns who gets the point, making the game more interesting as you can always accidentally click the space on the other players colour and win them a point. 

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

  In this part of the code i also added sound, i used loadSound to preload a sound i downloaded when the key is pressed and inside the target. To ensure it states who wins, i added text onto the screen which states the score of each player and allows them to see who is winning in real time. Once 20 beats have passed, which i determined by using totalBeats, the game will end and the message is displayed to the user which player has won, or also if it was a tie. 

Overall, a challenge i faced when creating the code was assigning the beats and ensuring they only scored when the beat was in the target. To solve it after many attempts i made it so the beats position and bounds of the target detected the collision when it moves past. I also struggled with making sure the beat moved across the screen the right amount of times and reset on each loop. I had it where the beat would only go past the screen twice and not loop. If i were to do this again, i think i would like to add a moving target and perhaps add difficulty levels. I could also make it so each beat created a different sound to create a song. 

[see my code running here](/2_player_game/index.html)
