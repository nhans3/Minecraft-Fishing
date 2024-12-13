// Functionize Minecraft Fishing Start Code

// HTML Variables

let imgResult = document.getElementById("result-img");
let codCount = document.getElementById("num-cod");
let salmonCount = document.getElementById("num-salmon");
let tropicalCount = document.getElementById("num-tropical");
let pufferCount = document.getElementById("num-puffer");

// Fish Count Variables

let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    // Steve Fish Simulator
    let randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.7) {
      imgResult.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
    } else if (randNum < 0.9) {
      imgResult.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      imgResult.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
    } else {
      imgResult.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    // Alex Fish Simulator
    let randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.1) {
      imgResult.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
    } else if (randNum < 0.2) {
      imgResult.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      imgResult.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
    } else {
      imgResult.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
    }
  } else if (character === "villager") {
    // Villager Fish Simulator
    let randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.25) {
      imgResult.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
    } else if (randNum < 0.5) {
      imgResult.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      imgResult.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
    } else {
      imgResult.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
    }
  }
}
