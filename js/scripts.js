$(document).ready(function() {

  // Prompt user to enter sentence
  var sentence = prompt("Please enter a sentence.");

  //Create Uppercase first and last letter
  var firstLastUpper = function(sentence){

    var firstLast = sentence.charAt(0) + sentence.charAt(sentence.length - 1);
    var firstLastUpper = firstLast.toUpperCase();
    return firstLastUpper;

  };

  //Create variable for reverse first and last letter
  var reverseString = function(string) {

    var firstLastArray = string.split("");
    var reverseArray = firstLastArray.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;

  };

  //Third function
  var concatAtEnd = function(sentence1) {

    var firstLastString = firstLastUpper(sentence1);
    var reverseFirstLastString = reverseString(firstLastString);
    return sentence1 + reverseFirstLastString;

  };

  var sentenceWithEnd = concatAtEnd(sentence);

  //Fourth function

  var concatAtBeg = function(sentence, sentenceWithEnd) {

    var middleNumber = (Math.floor(sentence.length / 2));
    var charAtMiddleNumber = sentence.charAt(middleNumber);
    return charAtMiddleNumber + sentenceWithEnd;

  };

  var encodeSentence = reverseString(concatAtBeg(sentence, sentenceWithEnd));


//Running Stuff

  $("#original-img").click(function(){
    alert(sentence);
  });

  $("#encrypted-img").click(function(){
    alert(encodeSentence);
  });


});
