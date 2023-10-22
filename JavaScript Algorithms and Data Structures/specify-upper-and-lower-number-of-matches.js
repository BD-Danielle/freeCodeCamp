let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/g; // 修改這一行
let result = ohRegex.test(ohStr);