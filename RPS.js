const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') {
      return userInput;
    } else if (userInput === 'paper') {
      return userInput;
    } else if (userInput === 'scissors') {
      return userInput;
    } else if (userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Invalid input')
    }
  }
  
  const getComputerChoice = () => {
    let compChoice = Math.floor(Math.random() * 3)
    if (compChoice == 0) {
      return 'rock';
    } else if (compChoice == 1) {
      return 'paper';
    } else if (compChoice == 2) {
      return 'scissors';
    }
  }  
  
  //console.log(getComputerChoice())
    
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie'
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!'
      } else if (computerChoice === 'scissors') {
        return 'User wins!'
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins!'
      } else if (computerChoice === 'rock') {
        return 'User wins!'
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!'
      } else if (computerChoice === 'paper') {
        return 'User wins!'
      }
    }
    if (userChoice === 'bomb') {
      return 'User blew up universe!'
    }
  }
  
  
  
  //console.log(determineWinner('paper',getComputerChoice()))
  
  
  const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice()
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice)
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame()