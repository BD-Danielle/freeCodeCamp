function titleCase(str) {
  let strr = str.toLowerCase();
  let ary = strr.split(" ");
  for(let i = 0; i < ary.length; i++){
    let cap = ary[i].charAt(0).toUpperCase();
    ary[i] = cap + ary[i].slice(1, ary[i].length);
  }
  return ary.join(" ");
}

titleCase("I'm a little tea pot");