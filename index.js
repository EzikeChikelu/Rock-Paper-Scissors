let result='';
const score = {
  wins: 0,
  losses: 0,
  ties: 0
}

function pickComputerMove() {
  let computerMove ='';
  // 1 divded by 3 
  const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3) {
      computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
     computerMove ='paper'
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
      computerMove = 'scissors'
    }
    return computerMove;
  }

function playGame(playerMove){
    computerMove = pickComputerMove();
    
      if (playerMove === 'scissors'){
          if(computerMove === 'rock'){
            result = 'You Lose.'
          }
          else if( computerMove === 'paper'){
            result = 'You Win.'
          }
          else if(computerMove === 'scissors'){
            result = 'You Tie.'
          }
      }
      else if (playerMove === 'paper'){
        if(computerMove === 'rock'){
            result = 'You Win.';
          }
          else if(computerMove === 'paper'){
            result = 'You Tie.';
          }
          else if(computerMove === 'scissors'){
            result = 'You Lose.';
        }
      }
      else if(playerMove === 'rock') {
        if (computerMove === 'rock'){
          result = 'You Tie.';
        }
        else if(computerMove === 'paper'){
          result = 'You Lose.';
        }
        else if(computerMove === 'scissors'){
          result = 'You Win.';
        }
      }

      if(result === 'You Win.'){
        score.wins += 1
      }
      else if(result === 'You Lose.'){
        score.losses += 1
      }
      else if(result === 'You Tie.'){
        score.ties += 1
      }

      alert(`You picked ${playerMove} computer picked ${computerMove}. ${result}

Wins: ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`);
  }

  function reset(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
  }
