// const myObj = {
//   name: "Hoàng An",
//   lists: ["Item 1", "Item 2", "Item 3"],
//   age: 32,
//   info: {
//     address: "Hà Nội",
//   },
// };
// console.log(myObj);

// const json = JSON.stringify(myObj);
// console.log(json);
// console.log(typeof json);

// const myString = "ahihi";
// const json2 = JSON.stringify(myString);
// console.log(json2);

// const myObj2 = JSON.parse(json);
// console.log(myObj2);

// try {
//   const data = JSON.parse(`{name: "Hoàng An"}`);
//   console.log(data);
// } catch (error) {
//   console.log(error.message);
// }

const user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 33,
  history: [
    {
      id: 1,
      title: "History 1",
    },
    {
      id: 2,
      title: "History 2",
    },
  ],
};
// const json = JSON.stringify(user, (key, value) => {
//   return key !== "age" ? value : undefined;
// });
const json = JSON.stringify(user, null, 5);
console.log(json);
