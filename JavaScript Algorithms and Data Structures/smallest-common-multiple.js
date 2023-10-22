function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);

  function gcd(a, b) { // 函式會在所屬區域自動提昇。
      return b === 0 ? a : gcd(b, a % b);
  }
  let lcm = min; // 值為偏歷後其共同持有因數之最大，如果帶入其數值為1，默認共同持有因數之最大為 1。
  for(let i = min + 1; i <= max; i++){
    let GCD = gcd(lcm, i);
    // 一個小技巧：最小公倍數 = (數字1 * 數字2) / 最大公因數
    lcm = (lcm * i) /GCD;
  }
  console.log(lcm);
  return lcm;
}

smallestCommons([12,18]);