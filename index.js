
let result='';

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
            result = 'You Lose'
          }
          else if( computerMove === 'paper'){
            result = 'You Win'
          }
          else if(computerMove === 'scissors'){
            result = 'You Tie'
          }
      }
      else if (playerMove === 'paper'){
        if(computerMove === 'rock'){
            result = 'You win';
          }
          else if(computerMove === 'paper'){
            result = 'You Tie';
          }
          else if(computerMove === 'scissors'){
            result = 'You Lose';
        }
      }
      else if(playerMove === 'rock') {
        if (computerMove === 'rock'){
          result = 'You Tie.';
        }
        else if(computerMove === 'paper'){
          result = 'You Lose';
        }
        else if(computerMove === 'scissors'){
          result = 'You Win';
        }
      }

      alert(`You picked ${playerMove} computer picked ${computerMove}. ${result}`);
  }