function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // 只修改這一行下面的代碼
    newArr.push(arr);
    // 只修改這一行上面的代碼
    num--;
  }
  return newArr;
}

copyMachine([true, false, true], 20);