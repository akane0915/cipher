// Prompt user to enter sentence
var sentence = prompt("Please enter a sentence.");

//Create Uppercase first and last letter
var firstLast = sentence.charAt(0) + sentence.charAt(sentence.length - 1);

var firstLastUpper = firstLast.toUpperCase();

//Create variable for reverse first and last letter
var reverseFirstLast = function(string) {

  var firstLastArray = string.split("");

  var reverseArray = firstLastArray.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;

};

console.log(sentence);
console.log(firstLastUpper);
console.log(reverseFirstLast(firstLastUpper));
