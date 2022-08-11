// Higher Order Function by javaScript
function add(a, b) {
  return a + b;
}

function manipulate(a, b, func) {
  var sum = a + b;
  var sub = a - b;
  function multiply() {
    var m = func(a, b);
    return sum * sub * m;
  }
  return multiply;
}
var multiply = manipulate(2, 3, add);
console.log(multiply());
