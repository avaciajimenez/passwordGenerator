// Assignment Code
var generateBtn         = document.querySelector("#generate");
const specialCharacters = "!@#$%^&*()";
const upperCases        = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCases        = "abcdefghijklmnopqrstuvwxyz"
const numbers           = "0123456789"
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  const passwordLength = prompt("Please enter the number of characters you want for your password. It must be more than 8 but less than 128.");
  const shouldPicknumbers = confirm("Do you want numbers in your password?");
  const shouldPickupperCases = confirm("Do you want uppercases in your password?");
  const shouldPicklowerCases = confirm("Do you want lowercases in your password?");
  const shouldPickspecial = confirm("Do you want special characters in your password?");
  const functionArray = []
    
  
  if (shouldPicknumbers === true) {
    functionArray.push(numbers)

  }

  if (shouldPickupperCases === true) {
    functionArray.push(upperCases)
  }

  if (shouldPicklowerCases === true) {
    functionArray.push(lowerCases)
  }

  if (shouldPickspecial === true) {
    functionArray.push(specialCharacters)

  }
  var randomPasswordGenerated = "";
  var index = 0
  for (let i = 0; i < (passwordLength); i++) {
    if (index >= functionArray.length) {
      index = 0
    }
    var randomNumberPicked = Math.floor(Math.random() * functionArray[index].length);

    randomPasswordGenerated += functionArray[index][randomNumberPicked];
index++
  }
  //randomPasswordGenerated += minimumNumbers;
  //randomPasswordGenerated += minimumLowerCases;
  // randomPasswordGenerated += minimumUpperCases;
  // randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}
