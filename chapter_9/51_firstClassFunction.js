// First Class Function by JavaScript

function add(a, b) {
  var result = a + b;
  return result;
}

// 1. A Function can be Stored in a Variable
var sum = add;
console.log(sum(2, 3));
console.log(typeof sum);

// 2. A Function can be Stored in an Array

var arr = [];
arr.push(sum);
console.log(arr);
console.log(arr[0](3, 4));

// 3. A Function can be Stored in an Object
var obj = {
  sum: add,
};
console.log(obj);
console.log(obj.sum(10, 14));
// 4. We can Function as Need
setTimeout(function () {
  console.log("I am create function");
}, 500);
// 5. We can pass Function as an Arguments
// 6. We can return Function from Another Function
