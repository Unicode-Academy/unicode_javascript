//Hiển thị console.log từ 1 đến 10
// let i = 0;
// let n = 10;
// while (i < n) {
//   i++;
//   console.log(i);
// }

// let i = 50;
// let n = 10;
// do {
//   i++;
//   console.log(i);
// } while (i < n);

//Nguyên tắc lặp và lồng giống như vòng lặp for
//Khác: Không biết trước số lần lặp

let n = 600;
let count = 0;
let s = n;
while (s % 2 === 0) {
  s = s / 2;
  console.log(s);
  count++;
}
console.log(count);
