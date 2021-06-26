
/* function computerPlay() {
    const selectOne = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random() * selectOne.length)
    console.log(random, selectOne[random]);
} */

/* function playerPlay() {
    const selectOne = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random() * selectOne.length)
    console.log(random, selectOne[random]);
}

 */

function computerPlay () {
    let computerSelection = Math.ceil(Math.random() *3)
    if (computerSelection < 1) {
        computerSelection = "Rock";
    } else if (computerSelection <= 2) {
        computerSelection = "Paper"
    } else {
        computerSelection = "Scissor"
    }
}


function playRound(playerSelection, computerSelection) {
        
        if(playerSelection === computerSelection){
            return "The result is a tie";
        }

        //Check for Rock
        if (playerSelection === "Rock")
               if (computerSelection === "Scissor") {
                    return "Rock beats Scissor, player Wins!";
                } else {
                    return "Rock beats Scissor, computer Wins!";
                }
        //Check for Paper
        if (playerSelection === "Paper")
               if (computerSelection === "Scissor") {
                    return "Scissor beats Paper, computer Wins!";
                } else {
                    return "Scissor beats paper, player Wins!";
                }
        //Check for Scissor
        if (playerSelection === "Scissor")
                if (computerSelection === "Rock") {
                    return " Rock beats Scissor, computer Wins!";
                } else {
                    return "Rock beats Scissor, Player Wins";
                }
                    
                
    }

  const playerSelection = prompt("Choose an object to play");
  console.log(playerSelection);
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
