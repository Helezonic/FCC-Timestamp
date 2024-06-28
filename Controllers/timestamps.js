const checkFormat = input => {

  const unixInput = Number(input);
  let unixValue = unixInput;
  let utcValue = new Date(unixInput).toString()
  //If string
  if(!unixInput){
    unixValue= Date.parse(input) || "Invalid Date";
    utcValue = new Date(input).toString() || "Invalid";
  }
  
  return {
    "unix" : unixValue,
    "utc" : utcValue
  }
}

module.exports = checkFormat