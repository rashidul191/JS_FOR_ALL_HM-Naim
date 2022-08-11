// Array Traverse

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
  arr[i] += 2;
  sum += arr[i];
  if (arr[i] % 2 == 0) {
    console.log("Evend Number: " + arr[i]);
  }
}
console.log("Array Sum is = " + sum);
