

//links buttons to functions

document.getElementById("rockbutton").onclick = function() {playerSelection("Rock");game()};
document.getElementById("paperbutton").onclick = function() {playerSelection("Paper");game()};
document.getElementById("scissorsbutton").onclick = function() {playerSelection("Scissors");game()};
document.getElementById("go").onclick = function() {reset()};

let player;
let computer;
var compTotalScore = 0;
var playerTotalScore = 0;

//returns players selection
function playerSelection(playerChoice){
    player = playerChoice;
    document.getElementById("playerselect").innerHTML = "Player selected: " + player;
}

    
//prints computers selection
function go(){
        let choices = ["Rock", "Paper", "Scissors"];
        computer = choices[Math.floor(Math.random()*choices.length)];
        document.getElementById("computerselect").innerHTML = "Computer selected: " + computer;
}


//plays round
function playgame(player, computer, compScore, playerScore){
    if((player == "Rock" && computer == "Rock") || (player == "Paper" && computer == "Paper") || (player == "Scissors" && computer == "Scissors")){
        document.getElementById("result").innerHTML = "Draw!";
    }else if((player == "Rock" && computer == "Paper") || (player == "Paper" && computer == "Scissors") || (player == "Scissors" && computer == "Rock")){
        document.getElementById("result").innerHTML = "You lose!";
        ++compScore;
        ++compTotalScore;
        document.getElementById("totalScoreComp").innerHTML = "Computer's Score: " + compScore;
        document.getElementById("totalScorePlayer").innerHTML = "Player's Score: " + playerScore;
    }else if ((player == "Rock" && computer == "Scissors") || (player == "Paper" && computer == "Rock") || (player == "Scissors" && computer == "Paper")){
        document.getElementById("result").innerHTML = "You Win!";
        ++playerScore;
        ++playerTotalScore;
        document.getElementById("totalScoreComp").innerHTML = "Computer's Score: " + compScore;
        document.getElementById("totalScorePlayer").innerHTML = "Player's Score: " + playerScore;
    }else{
        document.getElementById("result").innerHTML = "Error!";
    }
}

function game(){
    go();
    playgame(player,computer, compTotalScore, playerTotalScore);
    printScore(compScore, playerScore);
    
}

function reset(){
    document.getElementById("playerselect").innerHTML = "Want to play again? ";
    document.getElementById("computerselect").innerHTML = "Best out of 5?";
    document.getElementById("result").innerHTML = "";
    document.getElementById("totalScoreComp").innerHTML = "";
    document.getElementById("totalScorePlayer").innerHTML = "";

}
           


