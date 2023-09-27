const sumAll = function(startRange, endRange) {
  if((startRange < 0|| endRange < 0) || (typeof startRange != "number" || typeof endRange != "number")){
    return "ERROR";
  }
  let sum = 0;
  if(startRange > endRange){
    let temp = startRange;
    startRange = endRange;
    endRange = temp;
  }
  for(let i=startRange; i<=endRange; i++){
    sum = sum + i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
