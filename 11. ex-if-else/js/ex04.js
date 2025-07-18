//Khai báo hằng số
const THRESHOLD1 = 1;
const THRESHOLD2 = 5;
const THRESHOLD3 = 120;

const PRICE1 = 15000;
const PRICE2 = 13500;
const PRICE3 = 11000;

const RATE = 10; //Tỷ lệ giảm giá

let km = 50; //Số km đi
let total; //Số tiền phải trả

if (km <= 0) {
  console.log("Số km không hợp lệ");
} else if (km <= THRESHOLD1) {
  total = PRICE1 * km;
} else if (km <= THRESHOLD2) {
  total = PRICE1 * THRESHOLD1 + (km - THRESHOLD1) * PRICE2;
} else {
  total =
    PRICE1 * THRESHOLD1 +
    (THRESHOLD2 - THRESHOLD1) * PRICE2 +
    (km - THRESHOLD2) * PRICE3;
  //Nếu km > 120km --> Giảm 10%
  if (km > THRESHOLD3) {
    total = total - (total * RATE) / 100;
  }
}

if (total) {
  console.log(`Số tiền phải trả: ${total}`);
}
