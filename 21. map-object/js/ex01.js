// const map = new Map();
// map.set("name", "Hoàng An");
// map.set(1, 33);
// map.set(false, "Hà Nội");
// console.log(map);
// console.log(map.get("name"));
// console.log(map.get(1));
// console.log(map.get(false));

// const map = new Map([
//   ["name", "Hoàng An"],
//   [1, 33],
//   [false, "Hà Nội"],
// ]);

// const map2 = new Map(map);
// console.log(map2);

// const set = new Set([
//   ["name", "Hoàng An"],
//   [1, 33],
//   [false, "Hà Nội"],
//   [true, "Hồ Chí Minh"],
// ]);

// const map = new Map(set);
// for (let value of map) {
//   console.log(value);
// }

const map = new Map();
map.set("name", "Hoàng An");
map.set(1, 33);
map.set(false, "Hà Nội");
console.log(map);
// for (let [key, value] of map) {
//   console.log(key, value);
// }
map.forEach((item, key) => {
  console.log(key, item);
});
