// continue statement
// screp 4 and 7

// please google search learn more details.
var n = 10;
for (var i = 1; i <= n; i++) {
  if (i == 4 || i == 7) {
    continue;
  } else {
    console.log(i);
  }
}

// var n=10;
for (var i = 1; i <= n; i++) {
   if(i%2 == 0){
      continue
   }else{
      console.log("Odd Number "+i);
   }
}
