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
function writePassword () {}

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

 
