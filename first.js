
let score ={
  win : 0,
  lost : 0,
  tie : 0,
}



function generateComputerChoice() {
  let randomNumber = Math.random() * 3;

  if (randomNumber > 0 && randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function getResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Ball") {
      score.win++;
      return "user won";
    } else if (computerMove === "Bat") {
      score.tie++;
      return "tie";
    } else if (computerMove === "Stump") {
      score.lost++;
      return "computer won";
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      score.tie++;
      return "tie";
    } else if (computerMove === "Bat") {
      score.win++;
      return "user won";
    } else if (computerMove === "Stump") {
      score.lost++;
      return "computer won";
    }
  } else if (userMove === "Stump") {
    if (computerMove === "Bat") {
      score.win++;
      return "user won";
    } else if (computerMove === "Ball") {
      score.lost++;
      return "computer won";
    } else if (computerMove === "Stump") {
      score.tie++;
      return "tie";
    }
  }
}
function showResult(userMove, computerMove, result) {
  
  alert(
    `You Have Choosen ${userMove} .Computer Choice is ${computerMove} 
    
  ${result}
      win${score.win} lost${score.lost} tie${score.tie} `);
}
