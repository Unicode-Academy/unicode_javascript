// const set1 = new Set();
// console.log(typeof set1);

// const set2 = new Set([1, 1, 2, false, NaN, true, NaN]);
// console.log(set2);

// const set = new Set("Hello");
// console.log(set);

// function something() {
//   const set = new Set(arguments);
//   console.log(set);
// }
// something(1, 1, 2, NaN, true, NaN);

// const pList = document.querySelectorAll("p");
// const set = new Set(pList);
// console.log(set);

// const typeArray = new Int8Array([1, 2, 3]);
// const set = new Set(typeArray);
// console.log(set);

// const map = new Map();
// map.set("name", "Hoàng An");
// map.set("email", "hoangan.web@gmail.com");
// const set = new Set(map);
// console.log(set);

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
console.log(set);

// const arr = Array.from(set);
const arr = [...set].filter((item) => item % 2 === 0);

const newSet = new Set(arr);
console.log(newSet);
