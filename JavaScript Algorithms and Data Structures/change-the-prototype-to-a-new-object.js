function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // 只修改這一行下面的代碼
  numLegs: 4,
  eat(){
    console.log("dog can eat");
  },
  describe(){
    console.log("this dog has " + this.numLegs + "legs" );
  }
};