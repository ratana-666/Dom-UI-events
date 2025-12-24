// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;
// STATE DATA -----------------------------------------------------------
let chanceRemaining = localStorage.getItem("chanceRemaining") || 3;
let hasWon = localStorage.getItem("hasWon") === "true";
// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keypress", handleEnterPasserord);

const instructionLabel = document.getElementById("instructionLabel");
 
// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

function showGame() {
  // You can use this function to dispaly the Game view
  hide(lostView);
  hide(wonView);
  show(passwordView);
  passwordInput.value = "";
}

function showWin() {
  // You can use this function to dispaly the Win View
  hide(passwordView);
  hide(lostView);
  show(wonView);
  localStorage.setItem("hasWon", "true");
}
function showLost() {
    // You can use this function to dispaly the Lost View
  hide(passwordView);
  hide(wonView);
  show(lostView);

  // Step 3: Manage Try Again button and chances text
  if (chanceRemaining > 0) {
    show(tryAgainButton);
    tryAgainButton.textContent = `Try again (${chanceRemaining} chances left)`;
  } else {
    hide(tryAgainButton);
    // Optional: Change "You lost" text to "Game Over" if no chances left
    lostView.querySelector("h1").textContent = "Game Over! No chances left.";
  }
}

 
function handleCheck() {
     // Manage your logic when the button is pressed
     if (hasWon) {
    showWin();
    return;
  }

  const passwordEntered = Number(passwordInput.value);;

  // Step 2: Compare input
  if (passwordEntered === SECRET_CODE) {
    showWin();
  } else {
    // Step 3: Decrement chances
    chanceRemaining--;
    localStorage.setItem("chanceRemaining", chanceRemaining);
    showLost();
  }
}

// MAIN   ---------------------------------------------------------
if (hasWon) {
    showWin();
} else if (chanceRemaining <= 0) {
    showLost();
}

 