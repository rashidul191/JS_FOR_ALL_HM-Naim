// Scope Function JavaScript

// var a = "abc";

// function x() {
//   function y() {
//     var a = 90;
//     console.log(a); // 90
//   }
//   console.log(a); // abc
//   y();
// }
// x();

// function testDemo(num) {
//   function a() {
//     var result = num % 3 == 0;
//     return result;
//   }
//   function b() {
//     var result = num % 5 == 0;
//     return result;
//   }
//   if (a() && b()) {
//     console.log(num + " is divisible both 3 and 5");
//   } else {
//     console.log(num + " is not a valid number");
//   }
// }

// testDemo(15);

// function x() {
//   var a = 20;
//   function y() {
//     var a = 10;
//     console.log(a);
//   }
//   console.log(a);
//   y();
// }
// x();

// sumit কত বার আছে। here position on sumit.
var sentence =
  "Learn with Sumit is all about teaching web development skills and techniques in a efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

var count = 0;
var sentenceFind = sentence.split(" ");
//console.log(sentenceFind);

for (let i = 0; i < sentence.length; i++) {
  var position = sentence[i];
  if (position === "Sumit" || position === "sumit") {
    console.log(position.length);
  }
}

for (let i = 0; i < sentenceFind.length; i++) {
  const element = sentenceFind[i];
  if (element === "Sumit" || element === "sumit") {
    count++;
  }
}
console.log(count);
