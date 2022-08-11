/*
while loop

initializer
while(condition){
   increment
}

*/

// var i = 1;
// while(i<=10){
//    console.log(i+ " Rashidul Islam");
//    i++
// }

// please google search learn more details.

var isRenning = true;
while(isRenning){
   var rand = Math.floor(Math.random()* 10 +1);
   if(rand == 5){
      console.log("Winner Winner Chicken Dinner");
      isRenning = false;
   }
   else{
      console.log("You have got "+ rand);
   }
}