const leapYears = function(inputYear) {
  //leap years are divisible by 4
  //divisible by 100 not leap years except divisible by 400
  
  let status = false;

  if(inputYear % 4 == 0) status = true;
  if(inputYear % 100 == 0) status = false;
  if(inputYear % 400 == 0) status = true;

  return status;
};

// Do not edit below this line
module.exports = leapYears;
