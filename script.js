let playerScore = 0;
let computerScore = 0;
document.getElementById("rock").addEventListener("click", function(){
    playWith("rock");
});

// MAKE THE COMPUTER PICK
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
// CHOOSE THE WINNER OF THE ROUND
function playRound(playerChoice){
    let playerSelection = playerChoice;
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
// RESET EVERYTHING ON START GAME CLICK
function game(){
    playerScore = 0;
    document.getElementById("playerscore").textContent=playerScore
    computerScore = 0;
    document.getElementById("computerscore").textContent=computerScore
}
// PLAY A ROUND ON BUTTON CLICK
function playWith(pick){
    let roundWinner = playRound(pick);
    scoreUp(roundWinner);
}
// INCREASE ROUND WINNERS SCORE
function scoreUp(winner){
    console.log(winner);
    if(winner == "player"){
        playerScore++;
        document.getElementById("playerscore").textContent=playerScore;
    } else if(winner =="computer"){
        computerScore++;
        document.getElementById("computerscore").textContent=computerScore;
    } else{
        return;
    }
}