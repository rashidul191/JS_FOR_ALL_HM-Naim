var arr = [4, 7, 5, 1, 6, 2, 8, 9, 3];

// function filterArr(arr) {
//   var newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element % 2 == 0) {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// }
// var result = filterArr(arr);
// console.log(result);

// var result = arr.filter(function (value) {
//   return value % 2 == 1;
// });
// console.log(result);

console.log(arr)
function filterArr(arr, cb) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
   
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
var result = filterArr(arr, function(value){
  return value% 2 == 0;
});
console.log(result);

var result2 = filterArr(arr, function(value){
  return value% 2 == 1;
});
console.log(result2);


var result3 = filterArr(arr, function(value){
  return value < 4;
});
console.log(result3);

