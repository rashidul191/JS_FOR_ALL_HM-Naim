// for loop

/*
 for(initializer, condition, increment){
    loop body
 } 
 */

 // please google search learn more details.

// var num = 10;
// var myName = " Rashidul Islam";
// for(let i= 1; i<= num; i++){
//    console.log(i+myName);
// }

// var num = 10;
// var sum = 0;
// for (let i = 1; i <= num; i++) {
//   var result = sum;
//    sum += i;
//    console.log(result+"+ "+i+ " = "+ sum);

// }

var num = 10;
var sum = 0;
for (let i = 1; i <= num; i++) {
  if (i % 2 == 0) {
    var result = sum;
    sum += i;
    console.log(result + " + " + i + " = " + sum);
  }
}

console.log("Total Sum: "+sum);
