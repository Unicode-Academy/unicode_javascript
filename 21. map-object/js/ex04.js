// const obj1 = {};
// const obj2 = {};
// const weak = new WeakMap([
//   [obj1, "value 1"],
//   [obj2, "value 2"],
// ]);
// const obj3 = {};
// weak.set(obj3, "value 3");

// console.log(weak.get(obj3));
// console.log(weak.has(obj2));

// weak.delete(obj1);
// console.log(weak);

//IIFE
const Person = (() => {
  const _privateData = new WeakMap();
  return class {
    constructor(name, email) {
      _privateData.set(this, { name, email });
    }
    getName() {
      return _privateData.get(this).name;
    }

    getEmail() {
      return _privateData.get(this).email;
    }
  };
})();

const person = new Person("Hoàng An", "hoangan.web@gmail.com");
console.log(person.getName());
console.log(person.getEmail());
