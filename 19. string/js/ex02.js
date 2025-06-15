// const doSomething = (str, ...values) => {
//   console.log(str);
//   console.log(values);
// };
// let a = 10;
// let b = 20;
// doSomething`Xin chào: ${a}, ahihi: ${b}`;

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? `<b>${values[i]}</b>` : "");
  }, "");
}

let name = "Bob";
let action = "running";
let company = "Unicode";
console.log(highlight`${name} is ${action}! - ahihi ${company}`);
