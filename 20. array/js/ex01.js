const fruits = ["Táo", "Chuối", "Cam"];
// fruits[fruits.length] = "Khoai";
// fruits[0] = "Bưởi";
// fruits.name = "Hoàng An";
// fruits.length = 2;
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   const value = fruits[i];
//   console.log(value);
// }

// for (let value of fruits) {
//   console.log(value);
// }

// for (let index in fruits) {
//   const value = fruits[index];
//   console.log(value, index);
// }

// const a = fruits;
// a[0] = "Ahihi";
// console.log(fruits);

// const users = [
//   ["User 1", "user1@gmail.com"],
//   ["User 2", "user2@gmail.com"],
//   ["User 3", "user3@gmail.com"],
// ];
// console.log(users);

//Xóa phần tử mảng
const indexDel = 2;
const newArr = [];
for (let i = 0; i < fruits.length; i++) {
  if (i === indexDel) {
    continue;
  }
  newArr[newArr.length] = fruits[i];
}
console.log(newArr);
