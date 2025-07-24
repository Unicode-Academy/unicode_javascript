// const numbers = [5, -1, 2, 9, 3];
// const max = numbers.reduce((acc, curr) => {
//   if (acc < curr) {
//     return curr;
//   }
//   return acc;
// });
// console.log(max);
// const max = numbers.reduce((acc, curr) => (acc < curr ? curr : acc));
// console.log(max);

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
/*
result = {
    apple: 3,
    banana: 2,
    orange: 1
}
*/

// const result = fruits.reduce((acc, curr) => {
//   if (!acc[curr]) {
//     acc[curr] = 0;
//   }
//   acc[curr]++;
//   return acc;
// }, {});
// console.log(result);

// const result = fruits.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});
// console.log(result);

//Nhóm các phần tử theo age
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 30 },
// ];
// const groupedByAge = people.reduce((acc, curr) => {
//   if (!acc[curr.age]) {
//     acc[curr.age] = [];
//   }
//   acc[curr.age].push(curr);
//   return acc;
// }, {});
// console.log(groupedByAge);

// const words = ["Hello", "world", "from", "JavaScript"];
// const sentence = words.reduce((acc, curr) => {
//   return acc + " " + curr;
// }, "");
// console.log(sentence);

//Lọc trùng mảng
const users = ["User 1", "User 2", "User 1", "User 3", "User 2"];
const uniqueUsers = users.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(uniqueUsers);
