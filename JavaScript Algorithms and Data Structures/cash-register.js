function checkCashRegister(price, cash, cid) {
  const currencyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  // 计算找零金额
  let changeDue = cash - price;

  // 计算总钱柜中的金额
  let totalCID = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  }
  totalCID = parseFloat(totalCID.toFixed(2)); // 四舍五入确保精度

  // 如果找零金额等于钱柜中的金额，返回 "CLOSED"
  if (changeDue === totalCID) {
    return { status: "CLOSED", change: cid };
  }

  let change = [];
  for (let i = currencyUnit.length - 1; i >= 0; i--) {
    const coinName = currencyUnit[i][0];
    const coinValue = currencyUnit[i][1];
    let availableCoins = cid[i][1];
    let returnedCoins = 0;

    while (changeDue >= coinValue && availableCoins > 0) {
      changeDue -= coinValue;
      changeDue = parseFloat(changeDue.toFixed(2)); // 四舍五入确保精度
      availableCoins -= coinValue;
      returnedCoins += coinValue;
    }

    if (returnedCoins > 0) {
      change.push([coinName, returnedCoins]);
    }
  }

  // 如果无法找零或找零金额不等于0，则返回 "INSUFFICIENT_FUNDS"
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // 如果成功找零，返回找零金额数组
  return { status: "OPEN", change: change };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);