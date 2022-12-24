const allBtns = document.querySelectorAll("button");
const turn = document.querySelector(".turn__text");
const turnWrapper = document.querySelector(".turn");
const againButton = document.querySelector(".again-button");


let turnCounter = 0;
let playerX = true;
let playerO = false;

allBtns.forEach((el) =>
  el.addEventListener("click", () => {
    if (playerX) {
      el.textContent = "X";
      playerX = false;
      playerO = true;
      el.disabled = true;
      turnCounter++;
      turn.textContent = "O";
      check("X");
    } else {
      el.textContent = "O";
      playerX = true;
      playerO = false;
      el.disabled = true;
      turnCounter++;
      turn.textContent = "X";
      check("O");
    }
  })
);

function check(player) {
  const one = document.querySelector(".one").textContent;
  const two = document.querySelector(".two").textContent;
  const three = document.querySelector(".three").textContent;
  const four = document.querySelector(".four").textContent;
  const five = document.querySelector(".five").textContent;
  const six = document.querySelector(".six").textContent;
  const seven = document.querySelector(".seven").textContent;
  const eight = document.querySelector(".eight").textContent;
  const nine = document.querySelector(".nine").textContent;
  const obj = {
    firstCase:
      (one === "X" && two === "X" && three === "X") ||
      (one === "O" && two === "O" && three === "O"),
    secondCase:
      (four === "X" && five === "X" && six === "X") ||
      (four === "O" && five === "O" && six === "O"),
    thirdCase:
      (seven === "X" && eight === "X" && nine === "X") ||
      (seven === "O" && eight === "O" && nine === "O"),
    fourthCase:
      (one === "X" && four === "X" && seven === "X") ||
      (one === "O" && four === "O" && seven === "O"),
    fifthCase:
      (two === "X" && five === "X" && eight === "X") ||
      (two === "O" && five === "O" && eight === "O"),
    sixthCase:
      (three === "X" && six === "X" && nine === "X") ||
      (three === "O" && six === "O" && nine === "O"),
    seventhCase:
      (one === "X" && five === "X" && nine === "X") ||
      (one === "O" && five === "O" && nine === "O"),
    eightCase:
      (three === "X" && five === "X" && seven === "X") ||
      (three === "O" && five === "O" && seven === "O"),
  };
  function disableButtons() {
    allBtns.forEach((el) => (el.disabled = true));
    turn.textContent = `${player}  wins`;
    turnWrapper.style.left = "47.4%";
    againButton.style.opacity = "1";
  }
  if (obj.firstCase) {
    disableButtons();
  } else if (obj.secondCase) {
    disableButtons();
  } else if (obj.thirdCase) {
    disableButtons();
  } else if (obj.fourthCase) {
    disableButtons();
  } else if (obj.fifthCase) {
    disableButtons();
  } else if (obj.sixthCase) {
    disableButtons();
  } else if (obj.seventhCase) {
    disableButtons();
  } else if (obj.eightCase) {
    disableButtons();
  } else if (
    turnCounter === 9 &&
    !obj.fifthCase &&
    !obj.secondCase &&
    !obj.thirdCase &&
    !obj.fourthCase &&
    !obj.fifthCase &&
    !obj.sixthCase &&
    !obj.seventhCase &&
    !obj.eightCase
  ) {
    disableButtons();
    turn.textContent = "Draw";
  }
}

againButton.addEventListener("click", () => location.reload());

