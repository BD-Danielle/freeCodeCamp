function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// 只修改這一行下面的代碼

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
  console.log("Woof!")
}


// 只修改這一行上面的代碼

let beagle = new Dog();