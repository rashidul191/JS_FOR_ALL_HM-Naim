// First Look at Closure

var b = 10;
function a() {
  var x = 5;
  return function () {
    console.log(x);
  };
}
var abc = a();
console.dir(abc);

// Call Back Function by JavaScript

function sample(a, b, cb) {
  var c = a + b;
  var d = a - b;
  return (result = cb(c, d));
}

function sum(a, b) {
  return a + b;
}
// console.log(sample(5, 8));

console.log("SUM = ", sample(5, 8, sum));

var result = sample(5, 8, function (c, d) {
  return c + d;
});
console.log("SUM = ", result);

var result2 = sample(5, 8, function (c, d) {
  return c - d;
});
console.log("SUB = ", result2);

var result3 = sample(5, 8, function (c, d) {
  return c * d;
});
console.log("Multi = ", result3);

var result4 = sample(5, 8,  function (c, d) {
  return c / d;
});
console.log("Div = ", result4);
