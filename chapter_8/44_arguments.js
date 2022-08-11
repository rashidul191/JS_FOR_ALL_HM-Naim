// Function Arguments

function add(a, b) {
  var result = a + b;
  console.log(result);
}
add(10, 5);

// var array = [1, 3, 4, 5, 6, 7, 8, 6];
// var sum = 0;
// for (let i = 0; i < array.length; i++) {
//   var element = array[i];
//   sum += element;
// }
// console.log(sum);

function arraySum(array) {
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    var element = array[i];
    sum += element;
  }
  console.log(sum);
}

var array = [1, 3, 4, 5, 6, 7, 8, 6, 10];
arraySum(array);
arraySum([1, 23, 4, 3, 3, 3, 3, 2]);

function test(a, b, c) {
  console.log(arguments);
  console.log(JSON.stringify(arguments));
}
test(10, 20, 30);

function addAll() {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    sum += element;
  }
  console.log(sum);
}
addAll(1, 2, 3);
addAll(1, 2, 3, 4, 5, 6, 7);
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8);
