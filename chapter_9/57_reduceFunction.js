// Reduce Function

var arr = [1, 4, 9, 5, 2, 6, 8, 3];

// var myReduceSum = arr.reduce(function (prev, curr) {
//   return prev + curr;
// }, 0);

// console.log(myReduceSum);

// var myReduceMax = arr.reduce(function (prev, curr) {
//   return Math.max(prev, curr);
// }, 0);

// console.log(myReduceMax);

function arrSum(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

var myArrSum = arrSum(
  arr,
  function (prev, curr) {
    return prev + curr;
  },
  0
);
console.log(myArrSum);


var arrMax = arrSum(
  arr,
  function (prev, curr) {
    return Math.max( prev , curr);
  },
  0
);
console.log(arrMax);

var arrMin = arrSum(
  arr,
  function (prev, curr) {
    return Math.min( prev , curr);
  },
  arr[0]
);
console.log(arrMin);
