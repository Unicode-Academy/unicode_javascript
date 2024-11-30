let month = "2";
const year = 2024;
month = +month;
if (month % 1 === 0 && month >= 1 && month <= 12) {
  switch (month) {
    case 2:
      if (month % 4 === 0 && month % 100 !== 0) {
        console.log(`Tháng ${month} có 29 ngày`);
      } else {
        console.log(`Tháng ${month} có 28 ngày`);
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log(`Tháng ${month} có 30 ngày`);
      break;
    default:
      console.log(`Tháng ${month} có 31 ngày`);
      break;
  }
} else {
  console.log(`Tháng không hợp lệ`);
}
