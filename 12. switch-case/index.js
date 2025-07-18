//Câu lệnh rẽ nhánh switch case
// const a = 4;
// if (a > 0) {
//   switch (a) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//       if (a === 3) {
//         console.log("Số nhỏ đặc biệt");
//       } else {
//         console.log("Số nhỏ");
//       }
//       break;
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//       console.log("Số trung bình");
//       break;
//     case 10:
//     case 11:
//     case 12:
//     case 13:
//       console.log("Số lớn");
//       break;
//     default:
//       console.log("Số không hợp lệ");
//       break;
//   }
// } else {
//   console.log("Số không hợp lệ");
// }

// const age = 19;
// switch (true) {
//   case age < 18:
//   case age % 2 === 0:
//     console.log("Chưa đủ tuổi");
//     break;
//   case age >= 18 && age < 30:
//     console.log("Đã đủ tuổi");
//     break;
//   case age >= 30:
//     console.log("Quá tuổi");
//     break;
//   default:
//     console.log("Tuổi không hợp lệ");
//     break;
// }

const a = 0;
const b = "Unicode";
switch (true) {
  case Boolean(a): //a === true
    console.log("Đúng");
    break;
  case Boolean(b): {
    //b === true
    console.log("Sai");
    break;
  }
  default:
    console.log("Không hợp lệ");
    break;
}
