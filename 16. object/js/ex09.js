// const obj = {
//   email: "contact@unicode.vn",
// };
// // console.log(obj.email?.());
// let key = "email";
// console.log(obj?.[key]);

// const arr = null;
// console.log(arr?.[1]);

// const user = {}
// user?.email = "contact@unicode.vn";

let user = null;
let x = 0;
user?.prop?.[++x]; // x không tăng, vẫn là 0

// console.log(user);
