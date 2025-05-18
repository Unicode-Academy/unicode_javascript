// const obj1 = {
//   name: "Hoàng An",
//   age: 32,
// };
// obj1.age = 33;
// console.log(obj1);
// const obj2 = Object.freeze({
//   name: "Hoàng An",
//   age: 32,
// });
// obj2.age = 33;
// console.log(obj2);
"use strict";
const myObj = Object.seal({
  name: "Hoàng An",
  age: 32,
});
myObj.age = 33;
myObj.email = "hoangan.web@gmail.com";
delete myObj.name;
console.log(myObj);
