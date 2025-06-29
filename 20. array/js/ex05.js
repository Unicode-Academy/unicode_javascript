const provinces = [
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tĩnh",
  "Hòa Bình",
  "Hưng Yên",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
];

/*
Output mong muốn:
[
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tĩnh",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
  "Hòa Bình",
  "Hưng Yên"
]
*/

provinces.sort((a, b) => {
  return a.localeCompare(b, "vi");
});
console.log("Kết quả trả về");

console.log(provinces);

console.log("Kết quả mong muốn");

console.log([
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tĩnh",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
  "Hòa Bình",
  "Hưng Yên",
]);
