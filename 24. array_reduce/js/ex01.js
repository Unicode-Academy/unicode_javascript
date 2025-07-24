const numbers = [5, 10, 15, 20, 25, 30];
console.log(numbers);
const result = numbers.reduce((acc, current, index) => {
  //   console.log(`acc: ${acc}, current: ${current}, index: ${index}`);
  console.log(acc);

  return acc + current;
}, 0);
console.log(`result: ${result}`);
