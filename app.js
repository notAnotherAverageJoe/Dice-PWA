const rollButton = document.getElementById("roll-btn");
const diceResult = document.getElementById("dice-result");

// Get the sliders and value display spans
const numDiceSlider = document.getElementById("num-dice");
const numSidesSlider = document.getElementById("num-sides");
const numDiceValue = document.getElementById("num-dice-value");
const numSidesValue = document.getElementById("num-sides-value");

// Dice roll sound
const diceSound = document.getElementById("dice-sound");

// Function to roll a dice with a specific number of sides
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Update the number of dice and sides display when the sliders are changed
numDiceSlider.addEventListener("input", () => {
  numDiceValue.textContent = numDiceSlider.value;
});

numSidesSlider.addEventListener("input", () => {
  numSidesValue.textContent = numSidesSlider.value;
});

// Function to simulate dice rolling animation
function animateDiceRoll(numDice, numSides) {
  const rolls = [];
  let diceHTML = "";

  // Show dice rolling animation
  for (let i = 0; i < numDice; i++) {
    diceHTML += `<div class="dice">🎲</div>`;
  }
  diceResult.innerHTML = diceHTML;

  // Play dice roll sound
  diceSound.play();

  // Trigger shake and roll animation
  const diceElements = document.querySelectorAll(".dice");
  diceElements.forEach((dice) => {
    dice.style.animation = "shake 0.5s ease-in-out, roll 1s ease-out";
  });

  setTimeout(() => {
    // Once animation ends, generate the final dice values
    diceResult.innerHTML = "";
    for (let i = 0; i < numDice; i++) {
      rolls.push(rollDice(numSides));
      diceResult.innerHTML += `<div class="dice">${rolls[i]}</div>`;
    }
  }, 1500); // Adjust timing to match the animation duration
}

rollButton.addEventListener("click", () => {
  // Get the number of dice and the number of sides from the sliders
  const numDice = parseInt(numDiceSlider.value);
  const numSides = parseInt(numSidesSlider.value);

  // Animate the dice roll
  animateDiceRoll(numDice, numSides);
});
