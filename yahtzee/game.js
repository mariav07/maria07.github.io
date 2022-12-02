let heldDice=[0,0,0,0,0];
let rolledDice=[0,0,0,0,0];

/*****************************************
  ROLL
  The ROLL function is called when the "roll"
  button is pressed. It should do the following:
   - DONE: Update any NON-SELECTED dice
   - DONE: Only allow <=3 rolls per turn
******************************************/
timesRolled = 1
function roll() {
  if(timesRolled <= 3){
    updateDice();
    timesRolled = timesRolled + 1
  }
}


/*****************************************
  ROLL DICE
  This function will actually roll the dice 
  by generating 5 random numbers each between 1-6
******************************************/
function rollDice(){
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
    for(let i = 0; i < rolledDice.length; i++) {
      let source = document.getElementById("die"+i+"Image").src;
      if(source.includes("dieWhite")){
document.getElementById("die"+i+"Image").src="/yahtzee/img/dice/dieWhite_border"+rolledDice[i]+".png"; 
  }
  }
}


/***************************************** 
  TOGGLE HOLD
   The toggle hold function should do the following when called:
    - DONE: Turn the die clicked to RED (selected) if it is currently WHITE (not selected)
    - DONE: Turn the die clicked to WHITE (not selected) if it is currently RED (selected) 
*****************************************/
function toggleHold (diceSelect){
 let source = document.getElementById("die"+diceSelect+"Image").src;
   if(source.includes("dieWhite")){
    document.getElementById("die"+diceSelect+"Image").src = document.getElementById("die"+diceSelect+"Image").src.replace("dieWhite", "dieRed");
   } else{
     document.getElementById("die"+diceSelect+"Image").src = document.getElementById("die"+diceSelect+"Image").src.replace("dieRed", "dieWhite");
  }
}