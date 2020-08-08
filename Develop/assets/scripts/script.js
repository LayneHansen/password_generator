// Assignment Code

/* 

Collect user input for password criteria
1. length (8 to 128 characters)

  Number entered creates password length
  
  for (characters i=8; i <= 128; i++);

  let charAmount = document.querySelector("#charAmount")

2. CHARACTERS (numbers, uppercase letters, lowercase letters, symbols)

  if user checks box, include numbers
  
  var numbers = document.querySelector("#numbers");
  console.log(numbers);

  if user checks box, include lower case

  var lowCase = document.querySelector("#lowCase");
  console.log(lowCase);

  // if user checks box, include upper case

  var uppCase = document.querySelector("#uppCase");
  console.log(uppCase);

  // if user checks box, include symbols

  var symbols = document.querySelector("#symbols")
  console.log(symbols);

  EVENT LISTENERS FOR BOX CHECKS

  numbers.addEventListener('checkbox', charTypes);
  lowCase.addEventListener('checkbox', charTypes);
  uppCase.addEventListener('checkbox', charTypes);
  symbols.addEventListener('checkbox', charTypes);


  CREATE charTypes variable

  charTypes () {}


  VARIABLE to combine these selections
  
  if userSelects (enter into new variable)

3. randomize

  randomize characters
  randomize order of characters


4. display password on screen for user

*/



/* 

GENERATE BUTTON

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


var charAmountInput = charAmount.value;
var results = "";

/*var numberInput = num;
var lowerCaseInput = lower;
var upperCaseInput = upper;
var symbolInput = symbol;
*/

function generatePassword () {

  // if checked, include types of character (inside the for loop)
  // iterate over string enough times to get my the number of characters
  // i <= userInput for numbers chosen by user /2
  // randomize character each time (generate random number, use it to call function)
  // push command: push characters into results using if statements
  // results = []
  // 'pop' to get rid of commas
  
  for (var i=1; i <= 8 ;i++) {
    results = results + randomNumber() + randomLower() + randomUpper() + randomSymbol();

  } 
  return results;

}

generatePassword ();
console.log(generatePassword());

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
// generateBtn.addEventListener("click", writePassword);


// GENERATE CHARACTERS

//generate lower case letter

function randomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}
console.log(randomLower());

//generate upper case letter

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

// VARIABLES THAT PULL CHARACTERS

// const charAmount = document.getElementById("#charAmount")
// charAmount.addEventListener("keydown", function);

var lower = randomLower ();
var upper = randomUpper ();
var symbol = randomSymbol ();



