// const user = {
//   name: "Hoàng An",
//   email: "contact@unicode.vn",
//   age: 32,
//   "shipping-address": "Hà Nôi",
// };

// console.log(user.name);
// console.log(user["email"]);
// console.log(user["shipping-address"]);

// user.email = "hoangan.web@gmail.com";
// user["age"] = 33;
// user.address = "Hà nội";

// delete user.email;
// delete user["age"];

// console.log(user);

// let a = "age";
// let b = "address";
// let c = "shipping";
// console.log(user[`${c}-${b}`]);

// let key = "email";
// const user = {
//   [key]: "contact@unicode.vn",
// };
// console.log(user);

// let name = "Hoàng An";
// let email = "hoangan.webgmail.com";
// let age;

// const user = {
//   name,
//   email,
//   age,
// };
// console.log(user);

// const obj = {
//   var: 1,
//   let: "a",
//   for: null,
//   while: NaN,
// };
// obj.__proto__ = "Ahihi";
// console.log(obj.__proto__);

const user = {
  //   email: "contact@unicode.vn",
  //   email: null,
};
// if (user.email) {
//   console.log("email tồn tại");
// } else {
//   console.log("email không tồn tại");
// }

console.log("email" in user);
