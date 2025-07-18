// const ws = new WeakSet();
// console.log(ws);

// const obj1 = {
//   x: 1,
// };
// const weakset = new WeakSet([obj1]);
// console.log(weakset);

// const weakset = new WeakSet([1, 2, 3]);
// console.log(weakset);

//add
const obj1 = {
  x: 1,
};
const obj2 = {
  x: 2,
};
const obj3 = {
  x: 3,
};
const weakset = new WeakSet();
weakset.add(obj1).add(obj2).add(obj1);

// console.log(weakset.has(obj3));

weakset.delete(obj1);

console.log(weakset);

for (let item of weakset) {
  console.log(item);
}
