// Assignment Code

/* Collect user input for password criteria
  1. length (8 to 128 characters)
  2. symbols (numbers, uppercase letters, lowercase letters, numbers)
  3. randomize
  4. display password on screen for user
*/

// prompts

// user clicks Generate Password Button

// Add event listener to generate button


// collect user input for criteria


// PROMPTS

var length = prompt("How many characters do you want your password to have (from 8 to 128?");

var lowerCase = confirm("Do you want lower case letters?");

var upperCase = confirm("Do you want upper case letters?");

var digits = confirm("do you want digits?")

var symbols = confirm("do you want special symbols?")


// generate symbol

function getRandomSymbol () {
  const symbols = '!@#$%&'
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());



// GENERATE BUTTON

var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// GENERATE PASSWORD FUNCTION

function generatePassword () {
  // set password length
  
}

// Write password to the #password input

function writePassword() {
  console.log("write password is running");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

generateBtn.addEventListener("click", writePassword);


// KEYS

const randomCharacters {
  lower: getRandomLower,
  upper: getRandomUpper,
  digit: getRandomDigit,
  symbol: getRandomSymbol
}


// GENERATE CHARACTERS

//generate lower case letter

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}
console.log(getRandomLower());

//generate upper case letter

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}
console.log(getRandomUpper());

// generate number

function getRandomDigit () {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}
console.log(getRandomDigit());


