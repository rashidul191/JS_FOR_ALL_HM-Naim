// Expression of Function
//Anonymous Function: name sera je function likha hoi seta holo anonymous function bole.

function add(a,b){
  return a+ b;
}
console.log(add(2,3));

var myName = function () {
  console.log("I am a anonymous function");
  // return "I am a anonymous function";
};
myName();

var addition = function (a, b) {
  return a + b;
};
var sum = addition(10, 20);
console.log(sum);

var addition2 = (a, b) => {
  return a + b;
};
var result = addition2(10, 30);
console.log(result);

// set time out function.
setTimeout(function () {
  console.log("I will call after 5 second");
}, 5000);
