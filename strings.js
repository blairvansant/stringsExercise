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


var input = document.getElementById('sentence');
var rev = document.getElementById('rev');
var alpha = document.getElementById('alpha');
var palin = document.getElementById('palin');
var result = document.getElementById('result');
var clear = document.getElementById('clear');
var domText = document.getElementById('result')


//This function prevents a user from entering in a numerical value.

function noNumber(evt){
	var charCode = (evt.which) ? evt.which : event.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57))

    return true;
return false;
    
}
// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
function reversal(){
	var newInput = input.value;
	var revInput = newInput.split("").reverse().join("");
	
	console.log(revInput);
	domText.innerHTML += "<div> Your string reversed: "  + "<strong>" + revInput + "</strong>" + "</div>";	
}
// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
function alphabet(){
	var newAlpha = input.value;
	var alphaInput = newAlpha.split("").sort().join("");
	
	console.log(alphaInput);
	domText.innerHTML += "<div> Your string alphabatized: " + "<strong>" + alphaInput + "</strong>" + "</div>";
}
// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
function palindrome(){
	var newPal = input.value;
	var palInput = newPal.split("").reverse().join("");
		
		if (newPal === palInput){
			domText.innerHTML += "<div> Your string is a palindrome: </br>'" + newPal + "'<strong> equals </strong>'" + palInput + "'</div>";
		} else {
			domText.innerHTML += "<div> Your string is not a palindrome: </br>'" + newPal + "'<strong> equals </strong>'" + palInput + "'</div>";
	}
}
//Event listeners (clicks)
rev.addEventListener("click", reversal);
alpha.addEventListener("click", alphabet);
palin.addEventListener("click", palindrome);
input.addEventListener("keypress", noNumber);