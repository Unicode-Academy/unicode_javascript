// const user = {
//   name: "Hoàng An",
//   email: "contact@unicode.vn",
//   toString() {
//     return "Ok chưa?";
//   },
//   valueOf() {
//     return 10;
//   },
// };
// console.log(user.toString());
// console.log(String(user));
// console.log(user + "");
// console.log(Number(user));
// console.log(Number(user) === 10);

// const obj = {
//   [Symbol.toPrimitive](hint) {
//     if (hint === "number") {
//       return 100;
//     }
//     if (hint === "string") {
//       return "Unicode";
//     }
//     return true;
//   },
// };
// console.log(Number(obj));
// console.log(String(obj));

const user = {
  name: "Hoàng An",
  age: 32,
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? this.name : this.age;
  },
};
console.log(String(user));
console.log(Number(user));
console.log(String(user) + 10);
