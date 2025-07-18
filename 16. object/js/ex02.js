// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 32,
//   address: "Hà Nội",
// };
// console.log(user);

//for..in
// for (let key in user) {
//   const value = user[key];
//   console.log(value);
// }

// const keys = Object.keys(user);
// console.log(keys);

const myObj = {
  3: "D",
  a: "Ahihi",
  "-1": "A",
  0: "B",
  1: "C",
};
for (let key in myObj) {
  console.log(key);
}
