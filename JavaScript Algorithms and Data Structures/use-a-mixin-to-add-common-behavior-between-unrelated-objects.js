let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// 只修改這一行下面的代碼

let glideMixin = function(obj){
  obj.glide = function(){
    console.log("Gliding");
  }
}
glideMixin(bird);
glideMixin(boat);