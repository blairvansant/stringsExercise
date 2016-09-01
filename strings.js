// Copy the code below into the JavaScript file
// In your HTML, create an text input and a button.
// The text input should only accept letters. No numbers.
// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.
// function reversal() {
// }
// function alphabits() {
// }
// function palindrome() {
// }
// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);

//This function prevents a user from entering in numerical values.
var input = document.getElementById('input');
var rev = document.getElementById('rev');
var alpha = document.getElementById('alpha');
var palin = document.getElementById('palin');
var result = document.getElementById('result');
var clear = document.getElementById('clear');
var domText = document.getElementById('result')



function textonly(e){
var code;
if (!e) var e = window.event;
if (e.keyCode) code = e.keyCode;
else if (e.which) code = e.which;
var character = String.fromCharCode(code);
    var AllowRegex  = /^[\ba-zA-Z\s-]$/;
    if (AllowRegex.test(character)) return true;     
    return false; 
}

function reversal(){
	var newInput = input.value;
	var revInput = newIput.split("").reverse().join("")
	domText.innerHTML += <div>Your sentence in reverse: "+" "<strong>" + sortAlpha + "</strong></div>";

}
	
function alphabet(){

}

function palindrome(){

}