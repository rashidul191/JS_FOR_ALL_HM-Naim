// Hosting in JS
var a = 100;

// newPrint(a);
print(10);
var newPrint = print;
newPrint(45);

function print(a) {
  console.log(a);
}

print(a);

// Creational Phase
// a = undefined
// newPrint = undefined
// print = ref

// Executional Phase
// a = 100;
// print = 10;
// newPrint = ref;

// Output:
// 10
// 45
// 100

// Function Expression in JS
myFunction ();

function myFunction(){
   console.log("I am a function");
}


// Function Declaration in JS

var newABC = function newFunction(){
   console.log("I am new function")
}

newABC();