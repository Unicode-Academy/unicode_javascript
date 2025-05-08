const p1 = {
  x: 1,
  y: 2,
  something() {
    console.log("something");
  },
  meta: {
    title: "An",
  },
};
const p2 = {};
for (let key in p1) {
  p2[key] = p1[key];
}
// const p2 = Object.assign({}, p1);
// const p2 = { ...p1 }; //spread
// const json = JSON.stringify(p1);
// const p2 = JSON.parse(json);

p2.x = 10;
p2.meta.title = "Unicode";
console.log(p1);
console.log(p2);
