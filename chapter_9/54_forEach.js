// forEach function
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5];
var sum = 0;
// for (let i = 0; i < arr.length; i++) {
//    const element = arr[i];
//   sum += element;
// }
// console.log(sum);

// arr.forEach(function (value, index, arr) {
//   console.log(value, index, arr);
//   sum += value;
// });

// arr.forEach((value, index, arr) => {
//   console.log(value, index, arr);
//   sum += value;
// });

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
     cb(arr[i], i, arr)  
  }
  
}

forEach(arr, function(value, index, arr){
 console.log(value, index, arr);
 sum += value;
})
console.log("SUM = ", sum);
