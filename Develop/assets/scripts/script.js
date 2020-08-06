// Assignment Code

// Collect user input for password criteria
//  1. length (8 to 128 characters)

//  Number entered creates password length
  
for (characters i=8; i <= 128; i++);
  

 // 2. CHARACTERS (numbers, uppercase letters, lowercase letters, symbols)

  // if user checks box, include numbers
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

  // VARIABLE to combine these selections
  
  if userSelects (enter into new variable)

 // 3. randomize

  randomize characters
  randomize order of characters

//  4. display password on screen for user



/* PROMPTS

var length = prompt("How many characters do you want your password to have (from 8 to 128?");

var lowerCase = confirm("Do you want lower case letters?");

var upperCase = confirm("Do you want upper case letters?");

var digits = confirm("do you want digits?")

var symbols = confirm("do you want special symbols?")

*/



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

var num = Math.floor(Math.random) * 10);
console.log(num);



