function Point(x, y) {
  this.x = x;
  this.y = y;
  this.printLog = function () {
    console.log(this.x, this.y);
  };
}
Point.prototype.printLog2 = function () {
  console.log(this.x, this.y);
};
const p = new Point(1, 2);
console.log(p);
p.printLog();
p.printLog2();
