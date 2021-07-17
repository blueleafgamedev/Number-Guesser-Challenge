let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}

const compareGuesses = (userGuess, computerGuess, targetNum) => {
  userGuess = Math.abs(userGuess - targetNum)
  computerGuess = Math.abs(computerGuess - targetNum)
  if (userGuess <= computerGuess) {
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