const room = {
  name: "Chat",
};
const meet = {
  name: "Meet",
  //   participants: [{ name: "Alex" }, { name: "Anna" }],
  place: room,
};
room.occupiedBy = meet;

const json = JSON.stringify(meet, (key, value) => {
  return key === "occupiedBy" ? undefined : value;
});
console.log(json);

// const point1 = {
//   x: 1,
//   y: 2,
//   z: undefined,
//   metadata: { type: "point" },
// };
// const point2 = JSON.parse(JSON.stringify(point1));
// point2.metadata.type = "line";
// console.log(point1);

// console.log(point2);

const myObj = JSON.parse(json, (key, value) => {
  //   console.log(key, value);
  if (value === "Meet") {
    return "Meeting";
  }
  return value;
});

console.log(myObj);
