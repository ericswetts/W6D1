Function.prototype.inherits = function inherits(parent) {
  function Surrogate() {}

  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


function MovingObject (dir, speed) {
  this.dir = dir;
  this.speed = speed;
}

MovingObject.prototype.drive = function drive(speed) {
  console.log(`We are driving at ${speed} light years/hr`);
};

MovingObject.prototype.explode = function explode() {
  console.log(`This object EXPLODED!!!`);
};



function Ship (size) {
  this.size = size;
}

Ship.inherits(MovingObject);

function Asteroid (heat) {
  this.heat = heat;
}

Asteroid.inherits(MovingObject);

ship = new Ship(5);
ship.drive(30);

a = new Asteroid(110000000);
a.explode();
