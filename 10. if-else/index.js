// console.log("Bước 1");
// console.log("Bước 2");
// let a = 0;
// if (a) {
//   console.log("Bước 3");
//   console.log("Bước 4");
// } else {
//   console.log("Không thỏa mãn điều kiện");
// }

// console.log("Bước 5");

/*
1. Câu lệnh if thiếu
if (dieukien) {
    câu lệnh
}

2. Câu lệnh if else đầy đủ
if (dieukien) {
    câu lệnh nếu điều kiện đúng
} else {
    câu lệnh nếu điều kiện sai
}

3. Câu lệnh if else nhiều nhánh
if (dieukien1) {
    Câu lệnh điều kiện 1
} else if (dieukien2) {
    Câu lệnh điều kiện 2
} else if (dieukien3) {
    Câu lệnh điều kiện 3
} else {
    Câu lệnh trường hợp còn lại
}

4. Câu lệnh if else lồng nhau
if (dieukien1) {
    Câu lệnh nếu điều kiện 1 đúng
    if (dieukien2) {
        Câu lệnh điều kiện 2 đúng
    } else {
        Câu lệnh nếu điều kiện 2 sai 
    }
} else {
    Câu lệnh nếu điều kiện 1 sai
}
*/

let number = 5.1;
if (number % 1 === 0) {
  console.log(`${number} là số nguyên`);
} else {
  console.log(`${number} không là số nguyên`);
}
