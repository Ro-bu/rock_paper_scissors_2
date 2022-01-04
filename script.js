function computerChoice(){
    let numberChoice = Math.floor(Math.random()*3);
    let computerSelection;
    switch (numberChoice){
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
    }
    return computerSelection;
}
function playRound(){
    let playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
    let computerSelection = computerChoice();
    let winner;
    if(playerSelection === computerSelection){
        winner = "tie";
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        winner = "computer";
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        winner = "player";
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        winner = "player";
    } else if(playerSelection === "scissors" && computerSelection === "rock"){
        winner = "computer";
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        winner = "player";
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        winner = "computer";
    }
    return winner;
}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let roundWinner;
    let gameWinner;
    for( let i = 0; i<5; i++){
        roundWinner = playRound();
        switch(roundWinner){
            case "tie":
                break;
            case "computer":
                computerScore = computerScore+1;
                break;
            case "player":
                playerScore = playerScore+1;
                break;
        }
    }
    if( playerScore === computerScore){
        gameWinner = "tie";
        alert("it's a tie!");
    } else if(playerScore>computerScore){
        alert("You won the game!");
    }else{
        alert("The computer won the game");
    }

}