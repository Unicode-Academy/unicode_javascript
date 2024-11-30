const action = "edit";
if (action === "create" || action === "insert" || action === "add") {
  console.log("Thêm mới");
} else if (action === "update" || action === "edit") {
  console.log("Sửa");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xóa");
} else {
  console.log("Không hợp lệ");
}

switch (action) {
  case "create":
  case "insert":
  case "add":
    console.log("Thêm mới");
    break;

  case "update":
  case "edit":
    console.log("Sửa");
    break;

  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");

  default:
    console.log("Không hợp lệ");
    break;
}
