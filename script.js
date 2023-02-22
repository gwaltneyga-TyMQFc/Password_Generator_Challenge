// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //Define the character sets for upper and lower case
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //Define the numerics
  const numericChars = "0123456789";
  //Define the Special Characters
  // (No clue how to code the quotation mark because it doesn't stay in the string as a marker)
  const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

  // Request password length
  let passwordLength = prompt(
    "Enter the length of the password (Between 8 and 128 characters):"
  );

  //Make the input a number and validate it, leaving an alert if invalid.
  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("invalid password length. Please enter a number between 8 and 128:");
    return;
  } else if (passwordLength > 8 || passwordLength < 128) {
    //State to choose character types
    let includeLowercase = confirm("Include lowercase characters?");
    let includeUppercase = confirm("Include uppercase characters?");
    let includeNumeric = confirm("Include numbers?");
    let includeSpecial = confirm("Include special characters?");

    //Make sure to choose one character type

    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumeric &&
      !includeSpecial
    ) {
      alert("You must select at least one character type");
      return;
    }
    // Make the password based on character type(s)
    let chars = "";
    if (includeLowercase) {
      chars += lowercaseChars;
    }

    if (includeUppercase) {
      chars += uppercaseChars;
    }

    if (includeNumeric) {
      chars += numericChars;
    }

    if (includeSpecial) {
      chars += specialChars;
    }

    // Set for loop for each item in the password to be randomized
    // based on chosen acceptable characters up to chosen length.

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      password += chars.charAt(randomIndex);
    }
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
