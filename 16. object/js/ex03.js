// const p1 = {
//   x: 1,
//   y: 2,
// };
// const p2 = p1;
// p2.x = 10;
// console.log(p1);
// console.log(p2);

//So sánh object cùng tham chiếu
// const p1 = {};
// const p2 = p1;
// console.log(Object.is(p1, p2));

//So sánh 2 object bằng cách thủ công
// const point1 = {
//   x: 1,
//   y: 2,
// };
// const point2 = {
//   x: 1,
//   y: 2,
// };
// const point3 = {
//   x: 2,
//   y: 3,
// };

// if (point1.x === point2.x && point1.y === point2.y) {
//   console.log(`point2 bằng point1`);
// } else {
//   console.log(`point2 không bằng point1`);
// }

// if (point1.x === point3.x && point1.y === point3.y) {
//   console.log(`point3 bằng point1`);
// } else {
//   console.log(`point3 không bằng point1`);
// }

// function isPointEqual(p1, p2) {
//   return p1.x === p2.x && p1.y === p2.y;
// }
// console.log(isPointEqual(point1, point2));
// console.log(isPointEqual(point1, point3));

//So sánh nông (cấp đầu tiên)
function isShallowEqual(obj1, obj2) {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  for (let key in obj2) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const point1 = {
  a: 1,
  b: 2,
  c: [],
};
const point2 = {
  a: 1,
  b: 2,
  c: [],
};
// const point3 = {
//   a: 2,
//   b: 3,
// };

console.log(isShallowEqual(point1, point2));
// console.log(isShallowEqual(point1, point3));
