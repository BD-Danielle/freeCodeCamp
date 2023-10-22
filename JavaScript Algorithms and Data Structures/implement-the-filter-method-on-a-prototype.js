Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((ary, index, array) => {
    if(callback(ary, index, array)){
      newArray.push(ary)
    }})
  // Only change code above this line
  return newArray;
};