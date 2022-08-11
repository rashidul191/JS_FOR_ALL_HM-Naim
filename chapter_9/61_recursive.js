// Recursive function in js.

function sayHi(n) {
  if (n == 0) {
    return;
  }
  console.log("Hi, I am Calling");
  sayHi(n - 1);
}
sayHi(10);

function sum(n) {
  if (n == 1) {
    return 1;
  }
  return n + sum(n - 1);
}

var result = sum(5);
console.log(result);

function fact(n) {
   if(n == 1){
      return 1;
   }
   return n * fact(n-1);
}
 
var resultFact = fact(5);
console.log(resultFact);

var arr = [ 1,2,3,4,5,6,7];

function sumOfArray(arr, lastIndex){
   if(lastIndex < 0){
      return 0;

   }
   return arr [ lastIndex]+ sumOfArray(arr, lastIndex-1);
}

var resultSumOfArray = sumOfArray(arr, arr.length - 1);
console.log(resultSumOfArray);

