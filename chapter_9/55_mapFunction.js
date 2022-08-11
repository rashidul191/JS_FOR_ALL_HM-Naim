// Map function

var array = [1, 2, 3, 4];

// var sqrArray = array.map(function(value){
//   return Math.random()*100;
// })

// console.log(array);
// console.log(sqrArray);

// function myMap(array) {
//   var newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     var element = array[i] * array[i];
//     newArr.push(element);
//   }
//   return newArr;
// }

// console.log(array);
// var result= myMap(array);
// console.log(result);


function myMap(array, cb){
  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    const element = cb(array[i],i, array);
    newArr.push(element);
  }
  return newArr;
}

var sqr = myMap(array, function(value, index, array){
  return value* value;
})

var qub = myMap(array, function(value, index, array){
  return value* value* value;
})

var mten = myMap(array, function(value, index, array){
  return value* 10;
})

console.log(array);
console.log(sqr);
console.log(qub);
console.log(mten);