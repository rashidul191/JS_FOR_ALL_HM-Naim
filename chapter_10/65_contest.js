// Execution Context

function a() {
  b();
  console.log("I am Function A");
}

function b() {
  d();
  console.log("I am Function B");
}

function c() {
  console.log("I am Function C");
}

function d() {
  c();
  console.log("I am Function D");
}

var x;
console.log("X = ", x);
x = 100;
console.log("X = ", x);
a();
console.log("I am Global");

// Creational Phase
// Execution Phase
