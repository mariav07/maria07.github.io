let rolledDice = [0, 0, 0, 0, 0];
let timesRolled = 0;
let gameScore = 0;
let availableAssingments = 6;

/*****************************************
  ROLL
  The ROLL function is called when the "roll"
  button is pressed. It should do the following:
   - DONE: Update any NON-SELECTED dice
   - DONE: Only allow <=3 rolls per turn
******************************************/
function roll() {
  if (timesRolled < 3) {
    updateDice();
    timesRolled++;
  }
}


/*****************************************
  ROLL DICE
  This function will actually roll the dice 
  by generating 5 random numbers each between 1-6
******************************************/
function rollDice() {
  let output = [];
  for (i = 0; i < 5; i++) {
    output.push(Math.floor(Math.random() * (6)) + 1);
  }
  return output;
}

/*****************************************
  UPDATE DICE
  This function should:
   - DONE: update the image to the corrisponding dice value
   for any NON-SELECTED die
******************************************/
function updateDice() {
  rolledDice = rollDice();
  for (let i = 0; i < rolledDice.length; i++) {
    let source = document.getElementById("die" + i + "Image").src;
    if (source.includes("dieWhite")) {
      document.getElementById("die" + i + "Image").src = "/yahtzee/img/dice/dieWhite_border" + rolledDice[i] + ".png";
    }
  }
}


/***************************************** 
  TOGGLE HOLD
   The toggle hold function should do the following when called:
    - DONE: Turn the die clicked to RED (selected) if it is currently WHITE (not selected)
    - DONE: Turn the die clicked to WHITE (not selected) if it is currently RED (selected) 
*****************************************/
function toggleHold(diceSelect) {
  let source = document.getElementById("die" + diceSelect + "Image").src;
  if (source.includes("dieWhite")) {
    document.getElementById("die" + diceSelect + "Image").src = document.getElementById("die" + diceSelect + "Image").src.replace("dieWhite", "dieRed");
  } else {
    document.getElementById("die" + diceSelect + "Image").src = document.getElementById("die" + diceSelect + "Image").src.replace("dieRed", "dieWhite");
  }
}

/***************************************** 
  ASSIGN
*****************************************/
function assign(selectedNumber) {
  let countOfValidDice=0;
  let scoreForThisRound=0;
  
  
  for(let heldDieSrc of getHeldDice()){
    if(selectedNumber === getDieValue(heldDieSrc)){
      countOfValidDice++;
    }
  }

  scoreForThisRound = selectedNumber*countOfValidDice;
  document.getElementById(selectedNumber+"Count").innerHTML= countOfValidDice;
  document.getElementById(selectedNumber+"Score").innerHTML=scoreForThisRound;
  gameScore+=scoreForThisRound;
  document.getElementById("totalScore").innerHTML=gameScore;

  availableAssingments = availableAssingments - 1;
  if(availableAssingments === 0){
    setTimeout(gameOver, 500);
  } else{
    resetRoll();
    timesRolled = 0;
  }
  
}

/******************************************
GET HELD DICE
******************************************/
function getHeldDice(){
  let heldDice=[];
  for(let die of document.querySelectorAll(".die > img")){
    if(die.src.includes("Red")){
      heldDice.push(die.src);
    }
  }
  return heldDice;
}


/******************************************
GET DIE VALUE
******************************************/
function getDieValue(imageSource){
  return Number(imageSource.split("/img/")[1].replace(/[^0-9]/ig, ""));
}

/*****************************************
RESET ROLL
******************************************/
function resetRoll(){
   for(i = 0; i < 5; i++){
    document.getElementById("die" + i + "Image").src = "/yahtzee/img/dice/dieWhite_border0.png";
  }
}


  /*************************************************
  GAME OVER
    1. Display an alert to user with some message
    2. Reset the fame by calling the newGame function
  ***************************************************/
function gameOver(){
  alert("Game Over! Great job. You got " + gameScore + " points!");
  newGame();
}

/************************************************
NEW GAME
  - Reset gameScore to 0
  - Reset timesRolled to 0
  - Reset dice images
  - Reset the UI for each score group
************************************************/
function newGame(){
  availableAssingments = 6
  gameScore = 0;
  document.getElementById("totalScore").innerHTML=gameScore;
  timesRolled = 0;
  resetRoll();
  
  for(i = 1; i<=6; i++){
    document.getElementById(i+"Count").innerHTML = '<button onclick="assign('+i+ ')">Assign</button';
  }

  for(i = 1; i<=6; i++){
    document.getElementById(i+"Score").innerHTML = 0;
  }
    
}