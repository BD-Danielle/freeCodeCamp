function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// 只修改這一行下面的代碼
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();