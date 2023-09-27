const repeatString = function(repeatedString, repeatedTimes) {
  if(repeatedTimes < 0){
    return 'ERROR';
  }
  let resultantString = '';
  for(let i=0;i<repeatedTimes;i++){
    resultantString += repeatedString;
  }
 return resultantString;
}

// Do not edit below this line
module.exports = repeatString;
