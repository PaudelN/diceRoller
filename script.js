function rollDice() {
  const numberofDice = document.querySelector("#numberofDice").value;
  const diceResult = document.querySelector("#diceResult");
  const diceImages = document.querySelector("#diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < numberofDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
  }

  diceResult.textContent = `Dice: ${values.join(" | ")}`;
  diceImages.innerHTML = images.join(" ");
}
