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
      return "user won";
    } else if (computerMove === "Bat") {
      return "tie";
    } else if (computerMove === "Stump") {
      return "computer won";
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      return "tie";
    } else if (computerMove === "Bat") {
      return "user won";
    } else if (computerMove === "Stump") {
      return "computer won";
    }
  } else if (userMove === "Stump") {
    if (computerMove === "Bat") {
      return "user won";
    } else if (computerMove === "Ball") {
      return "computer won";
    } else if (computerMove === "Stump") {
      return "tie";
    }
  }
}
function showResult(userMove, computerMove, result) {
  alert(
    `You Have Choosen ${userMove} .Computer Choice is ${computerMove} and ${result}`
  );
}
