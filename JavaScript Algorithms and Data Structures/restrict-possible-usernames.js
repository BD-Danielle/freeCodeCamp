let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]([a-z]+\d*|\d{2,})$/ig; // Change this line
let result = userCheck.test(username);