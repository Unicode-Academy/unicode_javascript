//Hằng số thể hiện giá tiền theo bậc
const LEVEL_1 = 1678;
const LEVEL_2 = 1734;
const LEVEL_3 = 2014;
const LEVEL_4 = 2536;
const LEVEL_5 = 2834;
const LEVEL_6 = 2927;

const kwh = 500; //Số điện tiêu thụ
let total = 0;
if (kwh < 0) {
  console.log("Số điện không hợp lệ");
} else if (kwh <= 50) {
  total = kwh * LEVEL_1;
} else if (kwh <= 100) {
  total = 50 * LEVEL_1 + (kwh - 50) * LEVEL_2;
} else if (kwh <= 200) {
  total = 50 * LEVEL_1 + 50 * LEVEL_2 + (kwh - 100) * LEVEL_3;
} else if (kwh <= 300) {
  total = 50 * LEVEL_1 + 50 * LEVEL_2 + 100 * LEVEL_3 + (kwh - 200) * LEVEL_4;
} else if (kwh <= 400) {
  total =
    50 * LEVEL_1 +
    50 * LEVEL_2 +
    100 * LEVEL_3 +
    100 * LEVEL_4 +
    (kwh - 300) * LEVEL_5;
} else {
  total =
    50 * LEVEL_1 +
    50 * LEVEL_2 +
    100 * LEVEL_3 +
    100 * LEVEL_4 +
    100 * LEVEL_5 +
    (kwh - 400) * LEVEL_6;
}
console.log(total);
