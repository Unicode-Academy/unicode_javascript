// const age = 25;
// const result = age < 18 ? "Too young!" : age > 50 ? "Too old!" : "Welcome!";
// console.log(result);

// const result = 1 + 2 + 3 + (age > 30 ? 20 : 10) + 3 + 2 + 1;
// console.log(result);

const a = null;
const b = 20;
// const c = a ?? b;
const c = a !== null && a !== undefined ? a : b;
console.log(c);
