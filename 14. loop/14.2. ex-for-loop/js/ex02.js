/*
Bài 3: Tính giá trị biểu thức sau
S = 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n
*/

// const n = 5;
// S = 1 + 1*2 + 1*2*3 + 1*2*3*4 + 1*2*3*4*5
// S = 1! + 2! + 3! + 4! + 5!
// let tmp = 1;
// let s = 0;
// for (let i = 1; i <= n; i++) {
//   tmp = tmp * i;
//   s = s + tmp;
// }
// console.log(`S = ${s}`);

/*
Bài 4: Kiểm tra số nguyên tố
- Số nguyên --> Chia hết cho 1
- Lớn hơn 1 --> Toán tử so sánh
- CHỈ chia hết cho 1 và chính nó --> Dùng vòng lặp
*/
const n = 6;
let isPrime = true; //Giả định n là số nguyên tố --> Tìm trường hợp sai
if (n % 1 !== 0 || n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break; //Thoát vòng lặp
    }
  }
}
//Kiểm tra biến isPrime
if (isPrime) {
  console.log(`${n} là số nguyên tố`);
} else {
  console.log(`${n} không phải số nguyên tố`);
}
