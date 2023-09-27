const reverseString = function(inputString) {
  const charactersArray = inputString.split("");
  let reversedString = "";
  for(let character of charactersArray){
    reversedString = character + reversedString;
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
