// Closure in JS
// Closure is when a function is able to remember and access it's lexical scop even when tat function executing outside it's lexical scope

//able to remember and access it's lexical scop

// function test(){
//    var msg = "I am learning lexical scope and closure";

//    function sayHi(){
//       console.log(msg);
//    }
//    sayHi()
// }
// test()

//when tat function executing outside it's lexical scope

// function test(){
//    var msg = "I am learning lexical scope and closure";

//    return function (){
//       console.log(msg);
//    }

// }
// var sayMsg = test()
// sayMsg()

for (var i = 0; i <= 5; i++) {
  (function (n) {
    setTimeout(function () {
      console.log(n);
    }, 1000 * n);
  })(i);
}
