//Assignment Code
var generateBtn = document.querySelector("#generate");

//Var Allowable Characters
var allowableCharacters ="";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharacters = "agcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = "~!@#$%^&*()_+<>?,./;'[]\{}|";
var choices = [];
var selectedCharacters = [];
var yesOrNo = ['Y', 'N'];

//Write Password to the #password input
function generatePassword () {
    var passwordBank = "";
    var passwordResult = '';
}

//Password Length
var minLength = 8;
var maxLength = 128;
var newPassword;
var chosenLength;

//Event Listener for generate button
generateBtn.addEventListener("click", chooseLength);

 //Prompt for Uppercase, Lowercase and Special Characters

 let Uppercase = confirm("To include Uppercase Letters in your password, click 'ok'; otherwise, click 'cancel'.");
 let Lowercase = confirm("To include Lowercase Letters in your password, click 'ok'; otherwise, click 'cancel'.");
 let specialCharacters = confirm("To include Special Characters in your password, click 'ok'; otherwise, click 'cancel'.");
 let numeric = confirm("To include Numbers in your password, click 'ok'; otherwise, click 'cancel'.");

 
 var chooseLength = prompt("How long would you like your password to be? Please choose a number between 8 characters to 128 characters.");
 var passwordLength = parseInt(chooseLength);
  
    // validate if user entered number and get the number for password length
    if (passwordLength >= 8 && passwordLength <= 128) {
      userChoice()
    } else {
      alert("Invalid input, please enter a number between 8 and 128")
    };
  
    // ===== user can choose to add 4 types of characters to the password =====
    function userChoice() {
      var pswUpper = confirm("would you like to include uppercase letters?");
      var pswLower = confirm("would you like to include lowercase letters?");
      var pswNumber = confirm("would you like to include numbers?");
      var pswSpecial = confirm("would you like to include special characters?");
      // validate user's choice of each character type
      if (pswUpper || pswLower || pswNumber || pswSpecial) {
        if (pswUpper) {
        passwordBank += "ABCDEFGHIJKLMNOPQURSTUVWXYZ"; 
        // check value
        // console.log(passwordBank);
      } if (pswLower) {
        passwordBank += "abcdefghijklmnopqrstuvwxyz"; 
        // check value
        // console.log(passwordBank);
      } if (pswNumber) {
        passwordBank += "1234567890"; 
        // check value
        // console.log(passwordBank);
      } if (pswSpecial) {
        passwordBank += "!@#$%^&*()_+-=[]{},./?"; 
        // check value
        // console.log(passwordBank);
      }} else {
        alert("Please at least choose character type");
        userChoice();
      } 
      //return passwordBank
    };
    // check value
    // console.log(passwordBank)

    // ===== apply the string length to password result ====
    for (var i = 0; i < passwordLength; i++) {
       passwordResult += passwordBank[Math.floor(Math.random() * passwordBank.length)];
    }; 
  
    // check value
    //console.log("passwordResult:", passwordResult); 
    
    return passwordResult
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
function writePassword() {
    // return the value to password
    var password = generatePassword(); 
    var passwordText = document.querySelector("#password");
    
  
    passwordText.value = password;
}
  
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
 
