const map = new Map();
const result = map
  .set("name", "Hoang An")
  .set("email", "hoangan.web@gmail.com")
  .set([], "Ahihi");
// map.delete("name");
// map.clear();
console.log(map);

// for (let key of map.keys()) {
//   console.log(key);
// }

// for (let value of map.entries()) {
//   console.log(value);
// }

// map.forEach((value, key) => console.log(value, key));

console.log(Map.prototype);
