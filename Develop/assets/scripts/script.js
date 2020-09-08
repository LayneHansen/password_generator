// GENERATE BUTTON

var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

/* GENERATE PASSWORD FUNCTION
  How many characters do they want 8-128?
  if/else statement for how many
  alert, "You didn't select a correct amount"
  return statement, cancel execution
  
  Which character types do you want
  you must select at least one
  if selected, concatonate
  match number of characters to user input
  randomize type and order
  create a variable that shows what they want to return

*/

var num = 0

var charAmountInput = charAmount.value;

var numLength = document.getElementById('charAmount');
var lowSelect = document.getElementById('lowCase');
var uppSelect = document.getElementById('uppCase');
var numSelect = document.getElementById('numbers');
var symSelect = document.getElementById('symbols');




function generatePassword () {
  
  var results = "";
  var passwordLength = parseInt(numLength.value);
  
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
  alert("You must type a numerical value between 8 and 128.")
  results = "Please select between 8 and 128 characters."
  return results;

  } else {

  var includedCharacters = [];
  var includeLowerCase = lowSelect.checked;
  var includeUpperCase = uppSelect.checked;
  var includeNumbers = numSelect.checked;
  var includeSymbols = symSelect.checked;

  if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSymbols)
    alert("You must select at least one type of character.");
  
  if (includeLowerCase) {
      includedCharacters.push(randomLower);
  } 
  
  if (includeUpperCase) {
      includedCharacters.push(randomUpper);
  }

  if (includeNumbers) {
      includedCharacters.push(randomNumber);
  } 

  if (includeSymbols) {
      includedCharacters.push(randomSymbol);
  } 
  
  for (var i=1; i <= passwordLength ;i++) {
    results = results 
    + includedCharacters [Math.floor(Math.random()* includedCharacters.length)]();
  
  } 
  
  return results;

}

}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


// GENERATE CHARACTERS

// generate lower case letter

function randomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}
console.log(randomLower());

// generate upper case letter

function randomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}
console.log(randomUpper());

// generate number

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}
console.log(randomNumber());

// generate symbol

function randomSymbol () {
  const symbols = '!@#$%&'
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(randomSymbol());










