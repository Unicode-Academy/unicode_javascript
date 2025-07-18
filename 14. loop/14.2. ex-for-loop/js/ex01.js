//Bài tập 1: Tính giá trị biểu thức sau
//S = 1 + 2 + 3 + ... + n

// const n = 10; //S = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
// let s = 0;
// for (let i = 1; i <= n; i++) {
//   s = s + i;
// }
// console.log(`S = ${s}`);

//Bài tập 2: Tính n!
//n! = 1 * 2 * 3 * ... * n
const n = 5; // 1 * 2 * 3 * 4 * 5
let result = 1;
for (let i = 2; i <= n; i++) {
  result = result * i;
}
console.log(`${n}! = ${result}`);
