// Inner Function of JavaScript;

// function something() {
//   function say() {
//     console.log("I am a inner function");
//   }
//   say();
// }
// something();

function saySomeThing(greet, name) {
  function saySome() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return "";
    }
  }
  var massage = greet + " " + saySome();
  console.log(massage);
}

var greet = "Google Morning";
var name = "Rashidul Islam";

saySomeThing(greet);
