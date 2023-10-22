function zeroArray(m, n) {
  // 創建一個二維數組，有 m 行 n 列，元素均爲 0
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // 添加第 m 行到 newArray
    row = [];
    for (let j = 0; j < n; j++) {
      // 將 n 個 0 推入當前行以創建列
      row.push(0);
    }
    // 將當前行（已有 n 個 0）推送到數組
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
