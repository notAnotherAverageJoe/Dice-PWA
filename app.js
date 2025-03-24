const rollButton = document.getElementById("roll-btn");
const diceResult = document.getElementById("dice-result");

// Get the sliders and value display spans
const numDiceSlider = document.getElementById("num-dice");
const numSidesSlider = document.getElementById("num-sides");
const numDiceValue = document.getElementById("num-dice-value");
const numSidesValue = document.getElementById("num-sides-value");

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

rollButton.addEventListener("click", () => {
  // Get the number of dice and the number of sides from the sliders
  const numDice = parseInt(numDiceSlider.value);
  const numSides = parseInt(numSidesSlider.value);

  // Roll the dice and store the results
  const rolls = [];
  for (let i = 0; i < numDice; i++) {
    rolls.push(rollDice(numSides));
  }

  // Show the result
  diceResult.textContent = `You rolled: ${rolls.join(", ")}`;
});
