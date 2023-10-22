let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // 修改這一行
let result = pwRegex.test(sampleWord);