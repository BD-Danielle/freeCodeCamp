function myReplace(str, before, after) {
  let upperCase = /^[A-Z]/.test(before);
  let after_;
  if(upperCase){
    after_ = after[0].toUpperCase() + after.split("").slice(1).join('');
  }else{
    after_ = after.toLowerCase()
  }
  return str.replace(before, after_);;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");