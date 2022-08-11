// Return function in js.

function base(b) {
   return function (n) {
      var result = 1;
      for(let i =0; i<b ; i++){
         result *=n;
      }
      return result;
   }
}

var base10 = base(10);
console.log(base10(2));

var base5 = base(5);
console.log(base5(2));
console.log(base5(3));
console.log(base5(5));
console.log(base5(10));
