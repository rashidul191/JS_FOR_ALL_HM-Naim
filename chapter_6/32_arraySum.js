//Array Sum

var arr = [1, 2, 3, 4, 5, 6];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
 // sum += arr.length;
  if (arr[i] % 2 == 0) {
    sum += arr[i];
  // break;
  } else {
    console.log("Odd Number: " + arr[i]);
  }
}
console.log("Array Sum = " + sum);
