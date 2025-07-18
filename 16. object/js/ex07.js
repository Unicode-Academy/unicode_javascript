// {} --> Object Literal
//Hàm khởi tạo (Function Constructor)

// function Point(x, y) {
//   //this = {} //ngầm định
//   this.x = x;
//   this.y = y;
//   //return this
// }

// const root = new Point(0, 0);
// console.log(root);
// console.log(root.x, root.y);

//IIFE
// const root = new (function () {
//   this.x = 1;
//   this.y = 2;
// })();
// console.log(root);

//Kiểm tra hàm khởi tạo (new.target)
function Point(x, y) {
  if (!new.target) {
    return new Point(x, y);
  }
  this.x = x;
  this.y = y;
}
// Point();
// new Point();
const root = Point(10, 20);
console.log(root);
