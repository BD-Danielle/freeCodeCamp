function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let split = str.split(/\s+|_+/g).join("-").toLowerCase();
  console.log(split);
  return split;
}

spinalCase("AllThe-small Things");