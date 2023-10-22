const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let array = Object.assign([], arr);
  return array.sort((a, z)=> a-z)
  // Only change code above this line
}

nonMutatingSort(globalArray);