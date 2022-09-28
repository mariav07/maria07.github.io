/********************************************************************
  TODONE 1: Practice changing the case of strings
    - With the first letter of every word capitalized, it makes it too easy to play. When scrambled the word should either be all upper or lower case
    - HINT: the variable that hold the word that will be scrambled is called "selectedWord"

  TODONE 2: JS is case sensitive. -- Remember how I showed  "ken" and "Ken" are notw3 the same.
    - When checking your answer, the comparision is case sensitive. You should make sure that the cases are the same.
    - To do this, locate where the code is COMPARING the selected word to the value in the form field and set them both to either upper or lower case

  TODONE 3: Clean up the user input. This is an important step in every script that processes user submitted data.
   - Sometimes users accidently add a space to the end of their words so while they mean to submit the string "pumpkin" they actually submit "pumpkin " -- not the space at the end.
   - Go to the online docs, under strings and look up the .trim() function. 

  TODONE 4: Right now you have to reload the page each time. That means the game really can't keep score. Alter the code so that when the player successfully unscrambles a word the game will call the nextWord function.  
    - Move the variable allWords into the nextWord() function
    - Move the code that picks a random word into the nextWord() function
    - Move the code that writes a scrambled word to screen into the nextWord() function

  TODONE 4b: Calling nextWord()
    - Now that we moved the code that selects the next word into a function. We have to call that function.  We will cover Functions in more detail in an upcoming class, but for now, do the following:
      - Call the function nextWord() when the page loads. To do this, uncomment the nextWord() function call at the bottom of this script. 
      - We also want another word called when the user successfully unscrambles a word.  So call the nextWord() function in the code where you think it checks if the users answer is correct. 

  TODO 5: Now that we dont have to reload the page to get a new word, we can actually build a game
    - We need to keep track of successfully unscrambled words.  There's a DIV in the HTML called "unscrambled", we need to populate it with the words when they are unscrambled
    - It would be nice if there was a numeric score displayed
    - The UI is BORING! It needs styling and images 
*********************************************************************/
// Our master array of Halloween words
const allWords = ["Costumes", "Monster", "Disguise", "Ghost", "Witch", "Pumpkin", "Candle", "Zombie", "Frankenstein", "October", "Scarecrow", "Pirate", "Crow", "Cat", "Broomstick", "Vampire", "Prince", "Princess", "Candy", "Werewolf", "Mask", "Spell", "Goblin", "Ghoul", "Alien", "Mummy", "Spooky", "Creepy", "Slimy", "Fangs", "Blood", "Skeleton", "Graveyard", "Party", "Screaming", "Bats", "Skull", "Wicked", "Scary"];


//Select a random word from the "words" array and assign it to a variable called "selectedWord";
let randomIndex = Math.floor(Math.random() * (allWords.length - 1));
let selectedWord = allWords[randomIndex].toLowerCase();
let unScrambled = []

// This is a placeholder. You will need to move code into this funcation as part of the assignment.
function nextWord() {
 randomIndex = Math.floor(Math.random() * (allWords.length - 1));
 selectedWord = allWords[randomIndex].toLowerCase();

//Scramble the selectedWord and display it inside of a div
 document.getElementById("scrambledWord").innerHTML = selectedWord
  .split("")
  .sort(() => Math.random() - 0.5)
 .join("");
}

//A function that gets called when the user clicks on the Check button. 
function check() {
  if (selectedWord === document.getElementById("myWord").value.toLowerCase().trim()) {
    alert("Correct!");
unScrambled.push(selectedWord)
document.getElementById("unscrambled").innerHTML = unScrambled
}
  nextWord();
}

//A function that gets called when the user clicks on the Give Up button.
function giveUp() {
  document.getElementById("myWord").value = selectedWord;
  nextWord();
}

nextWord();