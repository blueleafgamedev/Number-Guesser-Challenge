let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  randomNum = Math.floor(Math.random() * 10)
  return randomNum
}

const compareGuesses = (userGuess, computerGuess, targetNum) => {
  if (Math.abs(userGuess - targetNum) <  Math.abs(computerGuess - targetNum) || (Math.abs(userGuess - targetNum) === Math.abs(computerGuess - targetNum))) {
    return true
  }
  else { 
    return false
  }
}

const updateScore = winner => {
  if (winner === 'human') {
   humanScore += 1
  }
  else if (winner === 'computer') {
    computerScore += 1
  }
}

const advanceRound = () => {
  return currentRoundNumber += 1
}