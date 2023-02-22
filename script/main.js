// set a dispaly text to show who is turn to play and game result (win or draw)
const displayText = document.querySelector('.status');
// set the game condition to be running so the player will be able to click on the boxes
let isRunning = true;
// set the currnt player to be player "X", you can change it to start with played"O
let currentPlayer = "X";
// set the value of each option to be empty at the begining of the game, this will be filled when player"" click 
// on the box
let optionBox = ["", "", "", "", "", "", "", "", ""];
// set the text function that wil show in the display text (win, draw and who is turn)
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
// set the winning options, if ny of these indexes where the same letter the player will win
const winOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



// set the dispaly text will to show who is turn when the game started
displayText.innerText = currentPlayerTurn();

// se a function to update the clicked box in the option box array and in the browser
function updateClickedBox(clickedBox, clickedBoxIndex) {
    optionBox[clickedBoxIndex] = currentPlayer;
    clickedBox.innerText = currentPlayer;
    if(currentPlayer==="X"){
        clickedBox.style.background = "yellow";
    }
    else{clickedBox.style.background = "violet";}
    
}

// set a function to change between players, if player X clicked the box then next it will be player O turn  
// and also will change display text to the next player turn
function changePlayer() {
    // currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (currentPlayer === "X"){
        currentPlayer = "O";}
        else{currentPlayer = "X";}
    
        displayText.innerText = currentPlayerTurn();
}

// set these values to 0 for ocal storage use
let x = 0;
let o = 0;
let d = 0;

// set a function to check the result with every click

function checkResult() {

    // we will set variable to declare th winner and we will set it to be false
    let winner = false;

    // we will set for loop to check if any of winning options has the same letter (X or O)
    for (let i = 0; i <= 7; i++) {
        const winIndex = winOptions[i];
        let a = optionBox[winIndex[0]];
        let b = optionBox[winIndex[1]];
        let c = optionBox[winIndex[2]];

        // if there any index for winning option still not clicked then the game will continue
        if (a === '' || b === '' || c === '') {
            continue;
        }


        // if all of the winning options index has the same value ("X" or "O") then the winner  
        // will be true and the game will be stopped
        if (a === b && b === c) {
            winner = true;
            break;
        }
    }


    // if the winner decalred then the display text will show which player has won the game and 
    // also will stop the game
    if (winner) {
        displayText.innerText = winningMessage();
        isRunning = false;


             // when a win occur a sound will be played and the record of how many win for each player  will 
             // be recorder and displayed on the webpage
        document.getElementById('sounds').src = "./sounds/win.wav";
        document.getElementById('sounds').play();
             if (currentPlayer ==="X"){
                // we added this condition so it will check if the local storage have any saved number
                // and then will take that number and increase it by one if the player win
                if(localStorage.getItem("playerX")){
                    x= parseInt(localStorage.getItem("playerX"))+1; 
                }
                // this will set the new value in the local storage and then it will display it in screen
                localStorage.setItem("playerX",x);
                document.getElementById("x").innerHTML = "Player X: "+  x;}
             else if (currentPlayer ==="O"){
                // we added this condition so it will check if the local storage have any saved number
                // and then will take that number and increase it by one if the player win
                if(localStorage.getItem("playerO")){
                    o=parseInt(localStorage.getItem("playerO"))+1;
                }
                // this will set the new value in the local storage and then it will display it in screen
                localStorage.setItem("playerO",o);
                {document.getElementById("o").innerHTML =  "Player O: "+o;}
            return
    }

    
        return;
    
    }



    //draw
        // here we will declare a draw situation and it is state that if all boxes are not empty and 
    // there are no winning options are matched, th display text will show there is draw and the game 
    // will be stopped
    let draw = !optionBox.includes("");
    if (draw ===true) {

            displayText.innerText = drawMessage();
            isRunning = false;
    
        // when a draw occur a sound will be played and the record of how many draw result will 
        // recorder and displayed on the webpage
            document.getElementById('sounds').src = "./sounds/draw.wav";
            document.getElementById('sounds').play();
            // we added this condition so it will check if the local storage have any saved number
            // and then will take that number and increase it by one if the player win
        if(localStorage.getItem("draw")){
        d = parseInt(localStorage.getItem("draw"))+1;
        }
        // this will set the new value in the local storage and then it will display it in screen
        localStorage.setItem("draw",d);
        document.getElementById("d").innerHTML = 'Draw : '+ d;

    }
    else{

        // if non of the conditions above are true then the game will continue and change player function will proceed
    changePlayer();

    }
    // if there is no winning or draw the change player function will be invoked and the player will
    // continue the game
}


// we set a function that when a player clicked on the box it will create an event, that event will take 
// the data-box-index number and will save a lettr X or O value in it
// we used parseInt becase the dta-box-index will return as string value and we need it as integer value
// so parseInt will changed the string value to an integer value 

function whenClicked(clickedBoxEvent) {
    const clickedBox = clickedBoxEvent.target;
    const clickedBoxIndex = parseInt(clickedBox.getAttribute('data-box-index'));



    // we will set condition so if the game is not running or the player clicked on a box with a letter in it
    // the click will do nothing in this case, if these 2 conditions are not met then the game will continue
    // normally, it will upadte the clicked box and will check the result
      if (optionBox[clickedBoxIndex] !== "" || !isRunning) {
        return;
    } 
    updateClickedBox(clickedBox, clickedBoxIndex);
    checkResult();
}


// we set a function to restart the game after winning or draw
// the function will set the same variabkes at the begining of the game and also will clead the 
// boxes from any letters

function restartGame() {
    isRunning = true;
    optionBox = ["", "", "", "", "", "", "", "", ""];
    displayText.innerText = currentPlayerTurn();
    document.querySelectorAll('.box').forEach(box => box.innerText = "");
    document.getElementById('sounds').src = "./sounds/restart.wav";
    document.getElementById('sounds').play();
    document.querySelectorAll('.box').forEach(box => box.style.removeProperty("background-color"));
}

// we will set a loop to add event listener to each box in the play bord so it will call  whenlicked 
//  function when it clicked

document.querySelectorAll('.box').forEach(box => box.addEventListener('click', whenClicked));

// add event listener to the restart button so it will call restartGame function when it clicked
document.querySelector('.restartButton').addEventListener('click', restartGame);

// document.getElementById("xx").innerHTML = localStorage.getItem("playerX");
// document.getElementById("oo").innerHTML = localStorage.getItem("playerO");
// document.getElementById("dd").innerHTML = localStorage.getItem("draw");