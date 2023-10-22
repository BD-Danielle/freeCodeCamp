function fearNotLetter(str) {
  for(let i = 0; i < str.length; i++){
    let charCode = str.charCodeAt(i);
    // console.log(charCode, str.charCodeAt(0) + i);
    if(charCode !== str.charCodeAt(0) + i){
      str = String.fromCharCode(str.charCodeAt(0) + i)
      return str
    }
  }
  return undefined;
}

fearNotLetter("abce");