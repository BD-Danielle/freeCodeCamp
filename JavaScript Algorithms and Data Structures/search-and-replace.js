function myReplace(str, before, after) {
  let upperCase = /^[A-Z]/.test(before);
  if(upperCase){
    let after_ = after[0].toUpperCase() + after.split("").slice(1).join('');
    str = str.replace(before, after_);
  }else{
    str = str.replace(before, after.toLowerCase());
  }
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");