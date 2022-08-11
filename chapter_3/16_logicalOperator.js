// && || ! 
/*
A = ture
B = flase
ture && ture = ture
ture && flase = flase
flase && ture = flase
flase && flase = flase


ture || ture = ture
ture || flase = ture
flase || ture = ture
flase || flase = flase

*/


//Find a Max number
var a = 45;
var b = 30;
var c = 74;

// AND Operator
if(a>b && a>c){
   console.log("A is big number");
}else if(b>a && b>c){
   console.log("B is big number");
}
else{
   console.log("C is big number");
}

// OR Operator

if(a>b || a>c){
   console.log("A is big number");
}else if(b>a || b>c){
   console.log("B is big number");
}
else{
   console.log("C is big number");
}

