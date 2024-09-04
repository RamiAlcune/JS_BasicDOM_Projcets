const GenerateRandomNumberFrom1To100 = () => {
  return Math.trunc(Math.random() * 100) + 1;
};
let RandomNumber = GenerateRandomNumberFrom1To100();
let currentAttempts = 10,
  Playing = true;
let Attempts = document.querySelector(".attempts");
const UserGuess = document.querySelector(".guess-input");
const btnCheck = document.querySelector(".check-btn");
let ShowNumber = document.querySelector(".number-display");
const btnTryAgain = document.querySelector(".try-again-btn");
let Highscore = document.querySelector(".highscore-value");
console.log(RandomNumber);
const ChangeMessage = (msg) => {
  document.querySelector(".message").textContent = msg;
};

const WinnerEffects = () => {
  if (Highscore.textContent < currentAttempts) {
    Highscore.textContent = currentAttempts;
    document.querySelector(".highscore-value").textContent = currentAttempts;
  }
  document.querySelector(".game-container").style.background = "#00ff00";
  document.querySelector("body").style.background = "#006600";
  ShowNumber.textContent = RandomNumber;
  ChangeMessage("Winner!.");
  Playing = false;
};

const Refresh = () => {
  ShowNumber.textContent = "?";
  currentAttempts = 10;
  Attempts.textContent = currentAttempts;
  ChangeMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#ecf0f1";
  document.querySelector(".game-container").style.backgroundColor = "#ecf0f1";
  RandomNumber = GenerateRandomNumberFrom1To100();
  console.log(RandomNumber);
  Playing = true;
};

const ChangeBackGroundColorByAttemps = (index) => {
  switch (index) {
    case 10:
      document.querySelector("body").style.backgroundColor = "#4CAF50"; // Amazing - Green
      break;
    case 9:
      document.querySelector("body").style.backgroundColor = "#8BC34A"; // Very Good - Light Green
      break;
    case 8:
      document.querySelector("body").style.backgroundColor = "#CDDC39"; // Good - Lime
      break;
    case 7:
      document.querySelector("body").style.backgroundColor = "#FFEB3B"; // Normal - Yellow
      break;
    case 6:
      document.querySelector("body").style.backgroundColor = "#FFC107"; // Below Average - Amber
      break;
    case 5:
      document.querySelector("body").style.backgroundColor = "#FF9800"; // Poor - Orange
      break;
    case 4:
      document.querySelector("body").style.backgroundColor = "#FF5722"; // Bad - Deep Orange
      break;
    case 3:
      document.querySelector("body").style.backgroundColor = "#F44336"; // Very Bad - Red
      break;
    case 2:
      document.querySelector("body").style.backgroundColor = "#D32F2F"; // Terrible - Dark Red
      break;
    case 1:
      document.querySelector("body").style.backgroundColor = "#B71C1C"; // Red Alert - Darkest Red
      break;
  }
};
const CheckWin = (num) => {
  if (num == RandomNumber) {
    WinnerEffects();
    return true;
  }
};

btnCheck.addEventListener("click", () => {
  if (Playing) {
    if (!CheckWin(UserGuess.value)) {
      ChangeMessage(UserGuess.value > RandomNumber ? "Too High" : "Too Low");
      currentAttempts--;
      if (currentAttempts == 0) Playing = false;
      Attempts.textContent = currentAttempts;
      ChangeBackGroundColorByAttemps(Number(currentAttempts));
    }
  }
});

btnTryAgain.addEventListener("click", () => {
  Refresh();
});
