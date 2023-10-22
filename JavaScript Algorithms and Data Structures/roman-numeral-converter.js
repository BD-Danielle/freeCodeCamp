function convertToRoman(num) {
  const ref = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
  let res = [];
  ref.forEach(r => {
    while (num >= r[1]) {
      res.push(r[0]);
      num -= r[1];
    }
  });
  return res.join('');
}

convertToRoman(36);