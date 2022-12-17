function computerPlay(){
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}
let computerScore = 0;
let playerScore = 0;
function rounds(playerSelection,computerSelection){
    let playerSelection=prompt("whats your sign?");
    var sign= playerSelection.toLowerCase();
        
    if (sign === computerSelection.toLowerCase()){return "Draw!"
    }
    else if (sign === "rock" && computerSelection === "Scissors") {
        playerScore++
        return "You win! Rock beats Scissors";
    }
    else if (sign === "paper" && computerSelection === "Rock") {
        playerScore++
        return "You win! Paper beats Rock";
    }
    else if (sign === "scissors" && computerSelection === "Rock") {
        playerScore++
        return "You win! Scissors beats Paper";
    }
    else {
        computerScore++
        return `You lose! ${computerSelection} beats ${sign}`;
    } 
} 
function game(){
    for (let i = 0; i < 5; i++) {
        console.log(rounds(playerSelection, computerPlay()));
    }
    if (playerScore > computerScore) {
        return `The Player won  || Player: ${playerScore} - Computer: ${computerScore}`
    } 
    else if (playerScore < computerScore) {
        return `The Computer won  || Player: ${playerScore} - Computer: ${computerScore}`
    } 
    else {
        return `The computer and the player had a draw! || Player: ${playerScore} - Computer: ${computerScore}`
    }
}
console.log(game())