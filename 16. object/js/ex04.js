const point1 = {
  a: 1,
  b: 2,
  c: {
    type: "ahihi",
  },
};
const point2 = {
  a: 1,
  b: 2,
  c: {
    type: "ahihi2",
  },
};

//Hàm kiểm tra 1 biến có phải object không?
const isObject = (obj) => {
  return obj !== null && typeof obj === "object";
};

//Hàm so sánh 2 object (Deep)
const isDeepEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  //Số lượng keys của 2 object khác nhau --> Không bằng nhau
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    //Lấy giá trị
    const value1 = obj1[key];
    const value2 = obj2[key];
    //Kiểm tra 2 giá trị có cùng là object không?
    const areObjects = isObject(value1) && isObject(value2);
    //Nếu là object thì phải gọi đệ quy để so sánh
    if (areObjects && !isDeepEqual(value1, value2)) {
      return false;
    }
    //Nếu không cùng là object thì so sánh giá trị
    if (!areObjects && value1 !== value2) {
      return false;
    }
  }
  return true;
};
const check = isDeepEqual(point1, point2);
console.log(check);
