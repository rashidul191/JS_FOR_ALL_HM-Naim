// Return Function

function addAll(num) {
  var num;
  num += num;
  return num;
}
var sum = addAll(4);
console.log(sum);

function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

var result = addAll(1, 3, 5, 7, 1, 8);
console.log(result);

function person(name, email) {
  return {
    name: name,
    email: email,
  };
}

var myName = "Rashidul"
var myEmail =  "rashidul.191cse.gub@gmail.com"

var personInFo = person(myName, myEmail);
console.log(personInFo);
