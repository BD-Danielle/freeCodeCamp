function findLongestWordLength(str) {
  let ary = str.split(' ');
  let longest = [];
  for(let i = 0; i < ary.length; i++){
    longest.push(ary[i].length);
  }

  return Math.max(...longest);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");