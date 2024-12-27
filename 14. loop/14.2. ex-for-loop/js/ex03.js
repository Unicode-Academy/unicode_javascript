/*
- Vẽ tam giác sao
*
* *
* * *
* * * *
- Vẽ tam giác số
1
2 3
4 5 6
7 8 9 10

- Vẽ bàn cờ vua

- Vẽ bảng cửu chương
*/

const colValue = 8;
const rowValue = 8;
let html = `<div class="box">`;
for (let row = 1; row <= rowValue; row++) {
  html += `<div class="row">`;
  for (let col = 1; col <= colValue; col++) {
    const total = col + row;
    html += `<div class="col ${total % 2 !== 0 ? "black" : ""}"></div>`;
  }
  html += `</div>`;
}
html += `</div>`;
document.body.innerHTML = html;
