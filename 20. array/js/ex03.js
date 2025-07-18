// const users = ["User 1", "User 2", "User 3", "User 4"];
// console.log(users);
// const result = users.forEach((value, index, array) => {
//   console.log(array);
//   console.log(`value: ${value}`, `index: ${index}`);
// });
// console.log(result);

//Tính tổng
// const numbers = [5, 1, 9, 2];
// let total = 0;
// numbers.forEach((number) => {
//   total += number;
// });
// console.log(total);

// const users = ["User 1", "User 2", "User 3", "User 4"];
// const newArr = users.map((value, index, array) => {
//   //   console.log(array);
//   //   console.log(`value: ${value}`, `index: ${index}`);
//   //   return `${index} - ${value}`;
//   return `<h2>${value}</h2>`;
// });
// console.log(newArr);

const users = ["User 1", "User 2", "User 3", "User 4"];
console.log(users);

const newArr = users.filter((value, index) => {
  //   return index % 2 === 0;
  return index;
});
console.log(newArr);
