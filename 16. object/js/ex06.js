// let user = {
//   name: "Hoàng An",
//   age: 32,
//   //   sayHello: function () {
//   //     console.log("Ok chưa?");
//   //   },
//   sayHello() {
//     console.log("Ok chưa?");
//     console.log(this.age);
//   },
// };
// function handleSayHello() {
//   console.log("Ok chưa?");
// }
// user.sayHello = handleSayHello;
// user.sayHello();
// const admin = user;
// user = null;
// admin.sayHello();
"use strict";
const sayHello = () => {
  //   console.log(this.name);
  console.log(this);
};
sayHello();
const user1 = {
  name: "User 1",
};
const user2 = {
  name: "User 2",
};
user1.sayHi = sayHello;
user2.sayHi = sayHello;

user1.sayHi();
user2.sayHi();
