const AVAILABLECHOICES = ['Rock', 'Paper', 'Scissors'];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let index = Math.floor(Math.random() * AVAILABLECHOICES.length);
    return AVAILABLECHOICES[index];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return `It's a tie!`;
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')){
        playerScore++;
        return `You win! ${playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase()+ computerSelection.slice(1)}.`;
    }
    else{
        computerScore++;
        return `You lose! ${computerSelection.charAt(0).toUpperCase()+ computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1)}.`;
    }
}

function game(){
    for(let i=0; i<5; i++){
        let playerSelection = prompt("Enter your choice: ");
        playRound(playerSelection,getComputerChoice());
    }
    if(playerScore > computerScore){
        console.log("You win!");
    }
    else{
        console.log("You lose!");
    }
}