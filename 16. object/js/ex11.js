// const id = Symbol("id");
// console.log(id, typeof id);

// let sym1 = Symbol("id");
// let sym2 = Symbol("id");
// console.log(sym1 === sym2);

// document.write(sym1);

// let sym1 = Symbol.for("id");
// let sym2 = Symbol.for("id");
// let sym3 = Symbol("id");
// console.log(sym1);
// console.log(sym2);
// console.log(sym1 === sym2);

// console.log(Symbol.keyFor(sym1));
// console.log(Symbol.keyFor(sym3));

let id = Symbol("id");
let id2 = Symbol("id");
let user = {
  name: "John",
  [id]: 123, // Thuộc tính với key là Symbol
  [id2]: 456,
};
console.log(user);
console.log(user[id2]);
