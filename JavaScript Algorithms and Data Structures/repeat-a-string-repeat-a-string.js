function repeatStringNumTimes(str, num) {
  if(num <= 0) return "";
  let strr = ''
  while(num){
    strr+=str;
    num--;
  }
  console.log(strr);
  return strr;
}

repeatStringNumTimes("abc", 3);