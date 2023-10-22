function destroyer(arr) {
  let ary = arguments[0];
  let array = [];
  for(let i=1; i<arguments.length; i++){
    array.push(arguments[i]);
  }
  let diff = arr.filter(c=>!array.includes(c));
  return diff;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);