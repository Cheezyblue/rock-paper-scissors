var totalPlayerWins = 0;
var totalComputerWins = 0;
var playerPoints = 0;
var computerPoints = 0;
// This array will always be these 3 choices
const computerChoice = ["rock", "paper", "scissors"];
const playerChoice = document.getElementById('choice');


// created an array to call the computer's choice
function computerPlay() {

    // variable that holds the index to the choice in the array
    // Math.random() * the array length will have a random of 3
    // added the math.floor so it keeps the number whole
    const randomChoice = Math.floor(Math.random() * computerChoice.length);

    // returns the choice from the random equation
    return computerChoice[randomChoice];

}

// let a variable store the event of the user clicking on either of the three choices: rock, paper or scissors

const playerSelection = playerChoice.addEventListener('click', (event) => {

    // Making sure that we are clicking and targetting the buttons within the choice div
    // return if it didn't catch the button node Name
    const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }
        // storing the event target id which should be the choices
        let playerAnswer = event.target.id

        // Once the player chooses, we will have the computer choose right after
        const computerSelection = computerPlay();
        updateImage(playerAnswer, computerSelection);

        // sending both player and computer answer into the playRound function
        playRound(playerAnswer, computerSelection);
})

// functions created to give computers and players points by calling the function and incrementing the player Points

function givePoints(winner) {

    // sends pwin (player) or cwin (cpu) and awards points and updating the scoreboard
    // increments points by one
    if (winner === 'pwin'){
    playerPoints++;
    console.log(playerPoints);
    updatePlayerScore(); 
    }
    else if(winner ==='cwin') {
    computerPoints++;
    updateComputerScore();
    console.log(computerPoints);
    }
                         
}

// updates player score
function updatePlayerScore(){
    document.getElementById("playerScore").innerHTML = playerPoints; 
}

// updates computer score
function updateComputerScore(){
    document.getElementById("computerScore").innerHTML = computerPoints;
}

// updates when the match is over
function updateRound(message) {
    document.getElementById("round").innerHTML = message;
}

// updates the message round by round
function updateMessageBoard(message) {
    document.getElementById("messageBoard").innerHTML = message;
}

function updateImage(playerAnswer, computerSelection) {

    document.getElementById("playerChoice").src= "images/" + playerAnswer +"-1200px_1200px.png";  

    document.getElementById("computerChoice").src= "images/" + computerSelection +"-1200px_1200px.png";  

}

// this function will check which choice player chose, if the player choice did not meet any of the win conditions. the point will be given to the CPU
function playRound(playerAnswer, computerSelection) {
            
    if ((playerAnswer == 'rock' && computerSelection == 'scissors') || (playerAnswer == 'paper' && computerSelection == 'rock') || (playerAnswer == 'scissors' && computerSelection == 'paper')) {
        givePoints('pwin');
        updateMessageBoard('Player Wins');
    }
    else if (playerAnswer == computerSelection) {
        updateMessageBoard('Tie');
       
    }
    else {
        updateMessageBoard('Computer wins');
        givePoints('cwin');
    }

    // if player points reach 4, reset counter, add to player total wins
if (playerPoints == 4) {
    totalPlayerWins++;
    playerPoints = 0;
    computerPoints = 0;
    updatePlayerScore(); 
    updateComputerScore();
    updateRound('Player win this round, Score is ' + totalPlayerWins +' : ' + totalComputerWins);
} 
// if computer points reach 4, reset counter, add to computer total wins
if (computerPoints == 4) {
    totalComputerWins++;
    computerPoints = 0;
    playerPoints = 0;
    updatePlayerScore(); 
    updateComputerScore();
    updateRound('Computers win this round, Score is ' + totalPlayerWins +' : ' + totalComputerWins);
} 

}