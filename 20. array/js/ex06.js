// const arr = [1, 2, 3];
// for (let value of arr) {
//   console.log(value);
// }

// const str = "Hello";
// for (let value of str) {
//   console.log(value);
// }

// const arr = [1, 2, 3];
// const iterator = arr[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// const range = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator]() {
//     let current = this.from;
//     let last = this.to;
//     return {
//       next() {
//         if (current <= last) {
//           return {
//             value: current++,
//             done: false,
//           };
//         }
//         return {
//           value: undefined,
//           done: true,
//         };
//       },
//     };
//   },
// };

// for (let value of range) {
//   console.log(value);
// }

// console.log([...range]);

// let str = "Hello";
// console.log([...str]);

// let set = new Set([1, 2, 3]);
// console.log([...set]);

// function something() {
//   console.log(arguments);
// }
// something(1, 2, 3, 4);

// const p = document.querySelectorAll("p");
// for (value of p) {
//   console.log(value);
// }

// const p = document.getElementsByTagName("p");
// console.log(p);

// const arrayLike = { 0: "a", 1: "b", length: 2 };
// for (let value of arrayLike) {
//   console.log(value);
// }

// const iterable = Array.from(arrayLike);
// for (let value of iterable) {
//   console.log(value);
// }

const arr = [...Array(10).keys()];
console.log(arr);

// arr.map((item) => {
//   console.log(item);
// });
