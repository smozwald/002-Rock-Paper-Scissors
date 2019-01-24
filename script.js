//Implement rock paper scissors.
//Need to create a "makemove" function that can be accessed by users or computer.

let player1Wins = 0;
let player2Wins = 0;
const form = document.querySelector("#play");
const player1Choices = document.getElementsByName("game");
const playerInfo = Array.from(document.querySelectorAll(".player p"))
const tally = document.querySelector("#tally p");
const reset = document.querySelector("#resetGame");

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

function updatePlayerSelections (p1Choice, p2Choice) {
    answers = [p1Choice, p2Choice];
    for (let i = 0; i < playerInfo.length; i++) {
        playerInfo[i].innerHTML = `This player played ${answers[i]}!`;
    }
}

function updateTally (p1Wins, p2Wins) {
    let total = p1Wins + p2Wins;
    let stringTally = `Player 1 has won ${p1Wins} games, and Player 2 has won ${p2Wins} games.`;
    if (total >= 5) {
        let winner =  (p1Wins > p2Wins) ? "Player 1." : (p2Wins > p1Wins) ? "Player 2." : "...It's a tie!";
        stringTally += `.. which means the winner is ${winner}`;
    }
    tally.innerHTML = stringTally;
}

function newGame () {
    tally.innerHTML = "New game begins, scores are back at 0!";
    player1Wins = 0;
    player2Wins = 0;
}

//Extending to allow DOM manipulation.
form.addEventListener("click", function () {
    if ((player1Wins + player2Wins) >= 5) {
        return;
    }
    player2Choice = computerPlay();
    player1Choice = playerPlay(); 
    updatePlayerSelections(player1Choice, player2Choice);
    result = playRound(player1Choice, player2Choice);
    if (result == "player1") {
        player1Wins++;
    } else if (result == "player2") {
        player2Wins++;
    }
    updateTally(player1Wins, player2Wins);
});

reset.addEventListener("click", function () {
    newGame();
});
