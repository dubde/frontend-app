# Frontend-task
The task is to create a web browser game. Initial version must consist of two components: 
- frontend (React, Redux), 
- backend (Java, RestApi)

Game rules: 
- The goal of the game is to find 3 treasures in minimum number of turns (number of turns will be the player score). 
- The board is of size 5x5 
- At the beginning of the board is blank.
- During each turn player can reveal up to 3 positions. 

As a player in the beginning of the game you should be able to put your name, which will be stored on a backend side. Backend assigns user with the 5x5 board with 3 treasures positions (frontend should not receive any information about them). 
During the game player should be able to mark up to 3 board positions. Check of those positions should be done in a single server call (all-in-one).  The response should contain: 

- If selected position was a treasure. 
- If selected position was not a treasure
– the proximity to the nearest treasure, on which player could use for next moves. 

The revealed positions should reflect the proximity and presence of treasure. They stay revealed until end of the game.  
When user finds all the treasures, game ends. The score should be stored in the backend, as a final screen player should see top 10 scores. 

Details:  
- Provide building and running instructions. 
- Propose testing solution. 
- The same user should be able to resume game when the browser is restarted. 
- Feel free to use any other tools, technologies (in addition to React, Redux, Java)
- The graphical design won't be evaluated. 
- Creation of the game board (generated, hardcoded, loaded from file, etc.) won't be evaluated. 
- No database is required on the backend (after backend restart state is lost). 
 
## Backend
Server is written in Java using Spring.io framework. In the folder there are scripts for building and running the project. It can be run also from Eclipse directly executing the "Application.class". API will be serverd on "http://localhost:8080"

## Fronted
Frontend is written in React with Bootstrap 4 styles. Instruction on how to run, build and test are given in the subfolder's README.md file. 

 
