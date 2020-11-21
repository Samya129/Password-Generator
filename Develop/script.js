// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    function generatePassword() {

      //Questions to ask user
      //Note: Strings are objects
      var nums = confirm ("Would you like numbers in your password?");
      var lettersUpper = confirm ("Would you like upper case letters in your password?");
      var specialChar = confirm ("Would you like special characters in your password?");
      var lettersLower  = confirm ("Would you like lower case letters in your password");
      
      let allValues = "";
      let password = "";

      // if/else statement for minimum and maximum characters
      var passLength = prompt ("How many characters would you like in your passcode? Note: Must be between 8-128 characters.")
      if (passLength < 8 || passLength > 128){
        alert("Invalid entry. Please pick a value between 8 and 128.");
    } else {
      (passLength > 7 || passLength < 129)
      alert("Great! Thank you for your response.");
    }
      //Defining total allValues for each variable here in if statements
      if (nums) {
        allValues += "0123456789";
      } 
      if (lettersUpper) {
        allValues += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (lettersLower) { 
        allValues +=  "abcdefghijklmnopqrstuvwxyz";
      }
      if (specialChar) {
        allValues += "~!@#$,%&*)-_+=[]/:;><.?";
      }
      //How to get the password from allValues requested with a random output 
      for (i = 0; i < passLength; i++) {
        password += allValues.charAt(Math.floor[Math.random() * allValues.length]);
      }

      alert("Your new password is attached below")
      return password;
  }


//why function is not being called for letter, special characters, working?? it only gives same 1 value if only one is clicked otherwise