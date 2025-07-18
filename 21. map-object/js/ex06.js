// const myArr = ["Hoàng An", "hoangan.web@gmail.com", 33, "Hà Nội"];
// const [fullname, email, , address, ...rest] = myArr;
// console.log(fullname, email);
// // console.log(rest);
// console.log(address);

// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

// const numbers = [1, [2, 3, 4], 5];
// const [a, [b1, b2, b3], c] = numbers;
// console.log(a);
// console.log(b1);
// console.log(b2);
// console.log(b3);
// console.log(c);

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   //   age: undefined,
//   address: "Hà Nội",
// };
// const { name: fullname, email, age = 50, ...rest } = user;
// console.log(fullname, email);
// console.log(age);
// console.log(rest);

let person = {
  name: "Foo",
  age: 15,
  information: { address: "Bar", phone: "0199999999" },
};
const {
  name,
  age,
  information: { address, phone },
} = person;
console.log(name, age);
console.log(address, phone);
