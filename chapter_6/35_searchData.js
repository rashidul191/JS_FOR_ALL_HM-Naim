// Search Data
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 55, 66, 77, 44, 45, 65];
var find = 10;
var isFound = false;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] == find) {
    console.log("Data Found at Index: " + i);
    isFound = true;
    break;
  }
}
if (isFound == false) {
  console.log("Data is not Found");
}
