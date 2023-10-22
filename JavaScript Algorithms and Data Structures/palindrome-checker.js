function palindrome(str) {
  // • \w is similar to [A-Za-z0-9_] for matching word characters (recall the definition for word boundaries)
  // • \d is similar to [0-9] for matching digit characters
  // • \s is similar to [ \t\r\n\f\v] for matching whitespace characters
  // •  \W , \D and \S respectively for their negated set.
  str = str.toLowerCase().replace(/\W|_/g,"");
  console.log(str);
  // Function to reverse any string
  function reverse(x){
    return x.split("").reverse().join("");
  }

  var str1 = reverse(str);
  var str2 = reverse(str1);
  console.log(str1, str2);
  if(str1 === str2){
    return true;
  }
  return false; 
}

palindrome("not a palindrome");