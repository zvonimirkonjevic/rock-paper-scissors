const AVAILABLECHOICES = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    let index = Math.floor(Math.random() * AVAILABLECHOICES.length);
    return AVAILABLECHOICES[index];
}