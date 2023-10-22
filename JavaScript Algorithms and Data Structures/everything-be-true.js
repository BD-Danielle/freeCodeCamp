function truthCheck(collection, pre) {
  let truthy = []
  for(let value of collection){
    truthy.push(value[pre])
  };
  console.log(truthy);
  
  return truthy.every(c=>c);;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");