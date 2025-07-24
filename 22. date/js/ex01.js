// const now = new Date();

// const date = new Date("2025-01-01 09:31:20");
// console.log(date);

//Getters
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getTime());
// console.log(now.getDay());

//Setters
// now.setFullYear(2026);
// now.setMonth(0);
// now.setDate(15);
// now.setHours(22);
// now.setMinutes(40);
// now.setSeconds(50);
// now.setMilliseconds(900);
// console.log(now);

//Static
// console.log(Date.now());
// console.log(Date.parse("2025-07-18 09:00:01"));

// const start = performance.now();
// let total = 0;
// for (let i = 0; i < 1000000; i++) {
//   let tmp = i * i * i;
//   total += tmp;
// }
// console.log(total);

// const end = performance.now();

// console.log(`Thời gian thực hiện: ${end - start} ms`);

//Tính khoảng cách 2 mốc thời gian
const start = new Date("2024-12-12 09:30:30");
const end = new Date("2025-11-12 09:30:30");
const diff = Math.abs(start - end);
// console.log(diff);
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(days);
