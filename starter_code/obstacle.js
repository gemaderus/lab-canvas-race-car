var Obstacle = function() {
  this.x = 300 * Math.random();
  this.speed = 10;
  this.y = 0;
};

Obstacle.prototype.updatePosition = function () {
  this.y = this.y + this.speed;
};
