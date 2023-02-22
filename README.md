# Hello World

This is the **Game** that I built from scratch at the begining of my journey as a _Software Engineer_ with ***General Assembly***.

The game is ***Tic Tac Toe*** or as it called locally in Bahrain ***The X, O Game***.

In this game I applied what we had learned of basic web development tools (HTML, CSS and JavaScript).

In This game I faced many problems that stop my game from processing, but by identifying these problems and break it to small picese it led to a functional game on web browser.

as you see below here is the wireframe and the user story of the game:
![Wireframe](/images/wireframe.JPG)

### User Story:
When the user open the web page he will see the game title and beneath it the score board and then the main game which will be nine boxes separated by a thin line, and benaeth that there will be the display text and lastly will be the restart button.
1. User Story 1
   - Given 9 boxes to click.
   - When current player click on of the boxes.
   - Then the box will display current player character ("X" or "O").
2. User Story 2:
   - Given 8 winning conditions (which are 3 boxes in series with same character) to win the game.
   - When one of the player clicked boxes matches on of the winning conditions.
   - Then the player will win the game and his score board will be updated and his winning result will increase by one and the display text will declare the winner player.
3. User Story 3:
   - Given a draw condintion.
   - when all boxes are clicked by the two players and none of them matched one of the winning conditions (which are 3 boxes in series with same character).
   - Then the game result will be Draw and the score board of game draw will be updated and increased by one and the display text will declare a draw result.
4. User Story 4:
   - Given a restart button to restart the game.
   - When one of the player won the game or the game ended with a draw.
   - Then click the Restart button to clear all the boxes and reset the game to the starting point. 

   After setting the wirefram and the user story it comes the foundation structure of the game.
   I started with setting the variables and then setting the functions where I will use these variables, and then step by step by building one function at a time and then combined them together to build my game to the final stage.
   
   one of the new things I used is the (**parseInt**) function, this is a built in function in javascript which will take the string and transform it to an integer.

   there are some upgrades I planned to the game but still not applied them, hopefully on the near future I will be able to do it, one of them is buid an AI function to play against another player.

   One of my favorite function is check result funcion, in this function I will have to set nested if conditions, at first it will check with every click from the players if a winning condition is met by one of the player then the game will stop and the display text will announce the winner and the winner counter will increase by one.
   If there was no winner and the game was draw then the game will stop and the display will show it is  draw game and the draw counter will increase by one.
   If none of the above conditions are met then the game will continue normally. 

    ### Thanks for your time and ***Enjoy The Game***