// Sort function in js

var arr = [1, 4, 9,-2 ,5, 2, 6, 0, -5,8, 3];

// arr.sort();
// console.log(arr);

arr.sort(function(a,b){
   if(a>b){
      return 1;
   } else if(b>a){
      return -1
   }else{
      return 0
   }
})

console.log(arr)
