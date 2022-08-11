// Curring function in JS.

// function add(a, b, c){
//    return a + b+ c
// }

// var sum = add(5, 10, 20)
// console.log(sum)

function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

var result = currying(5)(10)(15);
console.log(result);
