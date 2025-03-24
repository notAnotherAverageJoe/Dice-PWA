const rollButton = document.getElementById("roll-btn");
const diceResult = document.getElementById("dice-result");

rollButton.addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 6) + 1; // Roll a number between 1 and 6
  diceResult.textContent = `You rolled: ${roll}`;
});
