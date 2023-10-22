function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // 輸出 true

// 修改下方代碼，使其結果爲 true
Object.prototype.isPrototypeOf(Dog.prototype);