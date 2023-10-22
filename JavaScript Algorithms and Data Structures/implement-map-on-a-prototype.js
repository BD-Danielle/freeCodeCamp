Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((ary, index, array) => newArray.push(callback(ary, index, array)))
  // Only change code above this line
  return newArray;
};