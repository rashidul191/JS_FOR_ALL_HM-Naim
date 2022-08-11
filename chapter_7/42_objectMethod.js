// Object Method

var obj = {
   x: 10,
   y: 20,
   Z: 30,
}
console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

var obj2= Object.assign({}, obj);
obj2.x = 199;
console.log(obj2);


