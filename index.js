const randomNumber = Math.random();
let computerMove ='';
let result='';
let computerMove2 ='';
let computerMove3 ='';


function playGame(rock) {
// 1 divded by 3 
    if(randomNumber >= 0 && randomNumber < 1/3) {
      computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
     computerMove ='Paper'
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
      computerMove = 'Scissors'
    }
    console.log(computerMove);
   

    if (computerMove === 'rock'){
      result = 'You Tie.';
    }
    else if(computerMove === 'Paper'){
      result = 'You Lose';
    }
    else if(computerMove === 'Scissors'){
      result = 'You Win';
    }

    alert(`You picked rock. computer picked ${computerMove}. ${result}`);
}

function playGame(paper) {
  if(randomNumber >= 0 && randomNumber < 1/3) {
    computerMove2 = 'rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove2 = 'Paper';
  }
  else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove2 = 'Scissors';
  }
    console.log(computerMove2);

  if(computerMove2 === 'rock'){
    result = 'You win';
  }
  else if(computerMove2 === 'Paper'){
    result = 'You Tie';
  }
  else if(computerMove2 === 'Scissors'){
    result = 'You Lose';
  }

  alert(`You picked Paper. computer picked ${computerMove2}. ${result}`);
}

function playGame(scissors) {
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper';
  }
  else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'Scissors'
  }
  console.log(computerMove);

  if(computerMove === 'Rock'){
    result = 'You Lose'
  }
  else if( computerMove === 'Paper'){
    result = 'You Win'
  }
  else if(computerMove === 'Scissors'){
    result = 'You Tie'
  }

  alert(`You picked rock. computer picked ${computerMove}. ${result}`);
}