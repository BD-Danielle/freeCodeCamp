function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// 只修改這一行下面的代碼
Penguin.prototype.fly = function(){
  return "Alas, this is a flightless bird.";
}


// 只修改這一行上面的代碼

let penguin = new Penguin();
console.log(penguin.fly());