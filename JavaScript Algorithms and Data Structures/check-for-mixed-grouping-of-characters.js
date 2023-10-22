let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor)\s?[A-Z]?.?\sRoosevelt/g; // 修改這一行
let result = myRegex.test(myString); // 修改這一行
// 使用 myString 通過挑戰後，瞭解分組如何運行