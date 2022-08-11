// Multi Fimentsional Array

var array = [
  [78, 75, 41, 62, 95],
  [80, 59, 95, 69, 50],
  [56, 70, 61, 77, 60],
];
// console.log(arr[0][0]);
// console.log(arr[1][0]);
// console.log(arr[2][0]);

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log("Element " + i + " : " + array[i][j]);
  }
}
