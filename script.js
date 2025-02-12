const Choices = ['rock', 'paper', 'scissors'];
let computerWins = 0;
let playerWins = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)
    return Choices[randomNumber];
}

function getPlayerChoice(){
    let playerNumber = window.prompt(
        'Select your choice: 1)Rock, 2)Paper, 3)Scissors'
    )
   
    return Choices[playerNumber-1]
}

function playRound(playerChoice, computerChoice){
    if(playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'rock'){
        console.log('Player Wins!');
        playerWins++
    }else if(playerChoice === computerChoice){
        console.log('Draw Game');
    }else{
        console.log('Computer Wins!');
        computerWins++
    }

    console.log(`Player Wins: ${playerWins}, Computer Wins: ${computerWins}`);
}

function playGame(){
    playRound(getPlayerChoice(),getComputerChoice());
    playRound(getPlayerChoice(),getComputerChoice());
    playRound(getPlayerChoice(),getComputerChoice());
    playRound(getPlayerChoice(),getComputerChoice());
    playRound(getPlayerChoice(),getComputerChoice());
}

playGame();
