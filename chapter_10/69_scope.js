// Scope in JS

var x = 55;

function test() {
  var x = 4;
  function nested() {
    console.log(x);
  }
  nested();
}

test();

// console.log(x)
