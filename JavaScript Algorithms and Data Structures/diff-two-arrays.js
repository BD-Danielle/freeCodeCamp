function diffArray(arr1, arr2) {
  const newArr = [];
  let ary = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
  return ary;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);