function binaryAgent(str) {
  // 将二进制字符串拆分成每 8 位一组
  const binaryArray = str.split(/\s/g);
  
  // 将每组二进制转换为十进制字符，然后连接起来
  const result = binaryArray.map(bin => String.fromCharCode(parseInt(bin, 2))).join('');

  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");