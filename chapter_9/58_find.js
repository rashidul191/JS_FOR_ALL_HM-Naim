// Find Function in js

var arr = [1, 4, 9, 5, 2, 6, 8, 3];

// var result = arr.find(function(value, index){
//    return value == 9;
// })

// console.log(result);

// var result =arr.findIndex(function(value, index){
//    return value == 9;
// })
// console.log(result);

// function arrFindNumber(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 19) {
//       return arr[i];
//     }
//   }
// }

// var result = arrFindNumber(arr);
// console.log(result);

function arrFindNumber (arr, cb){
   for(let i = 0 ; i<arr.length; i++){
      if(cb(arr[i])){
         // return arr[i];
         return i;
      }
   }
}

var result = arrFindNumber(arr, function(value){
   return value == 9;
})
console.log(result);
