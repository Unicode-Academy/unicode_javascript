const salary = window.prompt("Nhap luong");
let taxRate, income;
if (salary > 0) {
  if (salary < 7000000) {
    taxRate = 10;
  } else if (salary < 15000000) {
    taxRate = 20;
  } else {
    taxRate = 30;
  }
  income = salary - (salary * taxRate) / 100;
  console.log("Thư nhập: " + income);
} else {
  console.log("Lương không hợp lệ");
}
