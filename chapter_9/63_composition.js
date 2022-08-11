// Composition function in JS.
// First function er input akare jodi Second function er outpur hisabe deya jay setake composition bole. 


function print (input){
   console.log(input)
}

function multiplyByFive(n){
   return n * 5
}

function add(a, b){
   return a + b
}

print(multiplyByFive(add(3,5)))