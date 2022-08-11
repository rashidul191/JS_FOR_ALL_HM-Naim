var n = 41;
switch (n % 2) {
  case 0:
    console.log("Event Number");
    break;
  case 1:
    console.log("Odd number");
    break;
}


// 0 = sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4= Thursday, 5 = Friday, 6 = Saturday
var date = new Date().getDay();
console.log(date);

switch (date) {
  case 0:
    console.log("To Day is Sunday");
    break;
  case 1:
    console.log("To Day is Monday");
    break;
  case 2:
    console.log("To Day is Tuesday");
    break;
  case 3:
    console.log("To Day is Wednesday");
    break;
  case 4:
    console.log("To Day is Thursday");
    break;
  case 5:
    console.log("To Day is Friday");
    break;
  case 6:
    console.log("To Day is Saturday");
    break;
   default:
      console.log("Not is valide number");
}
