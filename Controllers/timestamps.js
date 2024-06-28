const checkFormat = input => {
    
  const unixInput = Number(input);

  //If correct unix format
  let unixValue = unixInput;
  let utcValue = new Date(unixInput).toUTCString()

  //If string, but of date format
  if(!unixInput){
      unixValue = Date.parse(input)
      utcValue = new Date(input).toUTCString();
  }

  //If random string
  if(!unixValue) return {"error" : "invalid Date"};
    
  
  return timestamp = {
    "unix" : unixValue,
    "utc" : utcValue
  }
}

module.exports = checkFormat