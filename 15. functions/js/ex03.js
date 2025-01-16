"use strict";
// const sayHello = function () {
//   console.log("Hello Unicode Academy");
// };

// if (typeof sayHello === "function") {
//   sayHello();
// }

// const hi = sayHello;
// const hehe = hi;
// hehe();

// const ask = function (question, handleYes, handleNo) {
//   const answer = confirm(question);
//   if (answer) {
//     if (typeof handleYes === "function") {
//       handleYes();
//     }
//   } else {
//     if (typeof handleNo === "function") {
//       handleNo();
//     }
//   }
// };
// const sayYes = function () {
//   console.log("Tuyệt vời! Học đi bạn");
// };
// const sayNo = function () {
//   console.log("Tiếc quá");
// };
// ask(
//   "Bạn có muốn học code không?",
//   function () {
//     console.log("Tuyệt vời! Học đi bạn");
//   },
//   function () {
//     console.log("Tiếc quá");
//   }
// );

let isVietnamese = confirm("Bạn có phải người Việt Nam không?");
let welcome;
if (isVietnamese) {
  //   function welcome() {
  //     console.log("Chào bạn");
  //   }
  //   welcome();
  welcome = function () {
    console.log("Chào bạn");
  };
} else {
  //   function welcome() {
  //     console.log("Hello");
  //   }
  //   welcome();
  welcome = function () {
    console.log("Hello");
  };
}
welcome();
