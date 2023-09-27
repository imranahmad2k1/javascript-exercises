const removeFromArray = function(array, ...removeElements) {
  let newArray = [];
  for(let element of array){
    if(!removeElements.includes(element)){
      newArray.push(element);
    }  
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
