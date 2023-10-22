const squareList = arr => {
  // Only change code below this line
  return arr.filter(c=>c>0 && Number.isInteger(c))
  .map((c)=>{
    return Math.pow(c, 2)
  });
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);