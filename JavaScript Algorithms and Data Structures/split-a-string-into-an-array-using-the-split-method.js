function splitify(str) {
  // Only change code below this line
  return str.replace(/(,|-|\.)/g, " ").split(" ")
  
  // Only change code above this line
}

splitify("Hello World,I-am code");