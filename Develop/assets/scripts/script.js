// Assignment Code

// Collect user input for password criteria
//  1. length (8 to 128 characters)

//  Number entered creates password length
  
  // for (characters i=8; i <= 128; i++);

 // let charAmount = document.querySelector("#charAmount")


  // 2. CHARACTERS (numbers, uppercase letters, lowercase letters, symbols)

  /* if user checks box, include numbers
  
  var numbers = document.querySelector("#numbers");
  console.log(numbers);

  // if user checks box, include lower case

  var lowCase = document.querySelector("#lowCase");
  console.log(lowCase);

  // if user checks box, include upper case

  var uppCase = document.querySelector("#uppCase");
  console.log(uppCase);

  // if user checks box, include symbols

  var symbols = document.querySelector("#symbols")
  console.log(symbols);

  */

  
  /*

  EVENT LISTENERS FOR BOX CHECKS

  numbers.addEventListener('checkbox', charTypes);
  lowCase.addEventListener('checkbox', charTypes);
  uppCase.addEventListener('checkbox', charTypes);
  symbols.addEventListener('checkbox', charTypes);

  */

  // CREATE charTypes variable

  // charTypes () {}


  // VARIABLE to combine these selections
  
  // if userSelects (enter into new variable)

 /* 3. randomize

  randomize characters
  randomize order of characters

*/

//  4. display password on screen for user



/* PROMPTS

var length = prompt("How many characters do you want your password to have (from 8 to 128?");

var lowerCase = confirm("Do you want lower case letters?");

var upperCase = confirm("Do you want upper case letters?");

var digits = confirm("do you want digits?")

var symbols = confirm("do you want special symbols?")

*/


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

// const charAmount = document.querySelector("#charAmount");
// charAmount.addEventListener('keydown', "");

function generatePassword () {
  
  
  var results = "";
  var charAmountInput = charAmount.value;
  var numberInput = num;
  var lowerCaseInput = lower;
  var upperCaseInput = upper;
  var symbolInput = symbol;
  
  for (var i=1; i <= 8 ;i++) {
    results = results + numberInput + lower + upper + symbol;
  } 
  return results;

}

generatePassword ();
console.log(generatePassword());

// Write password to the #password input

function writePassword() {
  console.log("write password is running");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


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

var num = Math.floor(Math.random() * 10);
console.log(num);

// generate symbol

function randomSymbol () {
  const symbols = '!@#$%&'
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(randomSymbol());

// VARIABLES THAT PULL CHARACTERS



var lower = randomLower ();
var upper = randomUpper ();
var symbol = randomSymbol ();



