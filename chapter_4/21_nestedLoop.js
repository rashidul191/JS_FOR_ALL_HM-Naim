// Nested loop

// please google search learn more details.

//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5

var n = 5;
for (let i = 1; i <= n; i++) {
  var result = " ";
  for (let j = 1; j <= i; j++) {
    result += j;
  }
  console.log(result);
}


// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *


var n = 5;
for (let i = 1; i<= n; i++){
   var result = " ";
   for (let j = 1; j<= n; j++){
      result += "* ";
   }
   console.log(result);
}