//Implement rock paper scissors.
//Need to create a "makemove" function that can be accessed by users or computer.

let player1wins = 0;
let player2wins = 0;
const form = document.querySelector("#play");
const player1Choices = document.getElementsByName("game");

const legalMoves = ["rock", "paper", "scissors"];
let player2Choice =computerPlay();
let player1Choice;

function playRound(move1, move2) {
    move1 = move1.toLowerCase();
    move2 = move2.toLowerCase();
    if ((legalMoves.includes(move1)) && (legalMoves.includes(move2))) {
        if (move1 == move2) {
            return "tie";
        } else if (
            (legalMoves.indexOf(move1) -1) == (legalMoves.indexOf(move2))
            || ((legalMoves.indexOf(move1) == 0) &&  (legalMoves.indexOf(move2) == legalMoves.length - 1))){
                return "player1";
            } else {
                //This else/if will need to be updated if more options are added.
                return "player2";
            }
    } else {
        console.log("Illegal move was made!");
        return "illegal";
    }
}

function playerPlay() {
    for (let i = 0, length = player1Choices.length; i < length; i++) {
        if (player1Choices[i].checked)
        {
        let choice = player1Choices[i].value;
        console.log(choice);
        return choice;

        // only one radio can be logically checked, don't check the rest
        break;
        }
    }
}

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    return legalMoves[choice];
}

/* //Time to play a 5 round game, at this tage vs computer (could adapt to make player2 a player).
function game(num = 5) {
    player1Wins = 0;
    player2Wins = 0;
    for (i = 0; i < num; i++) {
        player2Choice = computerPlay();
        player1Choice = prompt("Scissors, Paper, Rock!");
        console.log(player1Choice + ", " + player2Choice);
        result = playRound(player1Choice, player2Choice);
        (result == "player1") ? (player1Wins++) :
            (result == "player2") ? player2Wins++ :
            (result == "illegal") ? console.log("Illegal move made, fix this in playRound function.") : console.log("Tie round");
        console.log(`Running tally, player 1 has ${player1Wins} wins. 
            Player 2 has ${player2Wins} wins.`);
    }
    let winner;
    (player1Wins > player2Wins) ? winner = "Player 1" : (player2Wins > player1Wins) ? winner = "Player 2" : winner = "Draw";
    if (winner == "Player 1" || winner == "Player 2") {
        console.log(`The winner of the game is ${winner}.`);
    } else {
        console.log("The game ended in a draw.");
    }
} */

//Extending to allow DOM manipulation.
player2Choice = computerPlay();
form.addEventListener("click", function () {
    player1Choice = playerPlay();
});
