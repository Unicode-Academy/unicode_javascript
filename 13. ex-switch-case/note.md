# Bài tập switch case

## Bài 1: Hiển thị số ngày của 1 tháng trong năm

Một năm chúng ta có 12 tháng, mỗi tháng sẽ có số ngày khác nhau, được liệt kê trong bảng dưới đây:

- Tháng 1, 3, 5, 7, 8, 10, 12 => 31 ngày
- Tháng 2 => 28 hoặc 29 ngày
- Tháng 4, 6, 9, 11 => 30 ngày

## Bài tập 2: Chuyển đoạn code dưới đây thành switch case

```js
const action = "create";
if (action === "create" || action === "insert" || action === "add") {
  console.log("Thêm mới");
} else if (action === "update" || action === "edit") {
  console.log("Sửa");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xóa");
} else {
  console.log("Không hợp lệ");
}
```
