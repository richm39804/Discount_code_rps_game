

  function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();

}

function getComputerMove(move) {
    return move || randomPlay();

}

function getWinner(playerMove,computerMove) {
    if (playerMove===computerMove) {
        return 'tie';
    } else if (playerMove==='rock' && computerMove==='scissors') {
        return 'player';
    } else if (playerMove==='paper' && computerMove==='rock') {
        return 'player';
    } else if (playerMove==='scissors' && computerMove==='paper') {
        return 'player';
    } else {
        return 'computer';
    }

}

function playToFive() {

    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5){

    var playerMove = getPlayerMove();
    console.log(playerMove);

    var computerMove = getComputerMove();
    console.log(computerMove);

    var winner = getWinner(playerMove, computerMove);
    console.log(winner);

    if (winner=== 'player') {
        playerWins++;
        console.log('Chicken Dinner!')
    } else if (winner==='computer'){
        computerWins++;
        console.log('took a byte!')
    }

        console.log(playerWins,computerWins)
    }

        console.log('Took the farm!!!')

    }



playToFive() ;



