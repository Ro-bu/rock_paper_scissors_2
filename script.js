let playerScore = 0;
let computerScore = 0;
let roundWinnerText  = document.getElementById("roundwinner");
roundWinnerText.textContent = "";
// PLAY ROUND WHEN CLICKED ON ROCK PAPER SCISSORS
document.getElementById("rock").addEventListener("click", function(){
    playWith("rock");
});
document.getElementById("paper").addEventListener("click", function(){
    playWith("paper");
});
document.getElementById("scissors").addEventListener("click", function(){
    playWith("scissors");
});
// FUNCTION TO HIDE PLAY AREA
function hideGameContent(){
    document.getElementById("playarea").style.display = ("none");
    document.getElementById("scoreboard").style.display = ("none");
}
hideGameContent();
// GAME FUNCTION ON START GAME BUTTON CLICK
document.getElementById("startgame").addEventListener("click",function(){
    game();
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
    document.getElementById("playerscore").textContent=playerScore;
    computerScore = 0;
    document.getElementById("computerscore").textContent=computerScore;
    document.getElementById("playarea").style.display = ("flex");
    document.getElementById("scoreboard").style.display = ("flex");
    document.getElementById("startgame").style.display = ("none");
    document.getElementById("winnertext").textContent="";

}
// PLAY A ROUND ON BUTTON CLICK
function playWith(pick){
    let roundWinner = playRound(pick);
    scoreUp(roundWinner);
    scoreChecker();
}
// INCREASE ROUND WINNERS SCORE
function scoreUp(winner){
    console.log(winner);
    if(winner == "player"){
        playerScore++;
        document.getElementById("playerscore").textContent=playerScore;
        roundWinnerText.textContent = "PLAYER";
    } else if(winner =="computer"){
        computerScore++;
        document.getElementById("computerscore").textContent=computerScore;
        roundWinnerText.textContent = "COMPUTER";
    } else{
        roundWinnerText.textContent = "TIE";
    }
}
// CHECK THE SCORE FOR WINNER
function scoreChecker(){
    if(playerScore >4){
        gameEnd("player");
    } else if(computerScore>4){
        gameEnd("computer");
    }
};
// DISPLAY WINNER AND HIDE GAME SECTION
function gameEnd(a){
    if(a == "player"){
        document.getElementById("playarea").style.display = ("none");
        document.getElementById("scoreboard").style.display = ("none");
        document.getElementById("startgame").style.display = ("flex");
        document.getElementById("winnertext").textContent="YOU HAVE WON THE GAME";
    } else {
        document.getElementById("playarea").style.display = ("none");
        document.getElementById("scoreboard").style.display = ("none");
        document.getElementById("startgame").style.display = ("flex");
        document.getElementById("winnertext").textContent="YOU HAVE LOST THE GAME";
    }
}