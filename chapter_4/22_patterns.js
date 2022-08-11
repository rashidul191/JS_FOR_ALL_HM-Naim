// please google search learn more details.

/*
Pattern type - 1
 Pattern 1
output: 
 *****
 *****
 *****
 *****
 *****
*/
var n = 5;
for (var row = 1; row <= n; row++) {
  var pattern = " ";
  for (var col = 1; col <= n; col++) {
    pattern = pattern + "*";
  }
  console.log(pattern);
}

/*
 Pattern 2
 output:  
 1       
 12
 123
 1234
 12345
*/
//var n = 5;
for (var row = 1; row <= n; row++) {
  var pattern = " ";
  for (var col = 1; col <= row; col++) {
    pattern = pattern + col;
  }
  console.log(pattern);
}

/*
 Pattern 3
output:
1
22
333
4444
55555
*/
//var n = 5;
for (var row = 1; row <= n; row++) {
  var pattern = " ";
  for (var col = 1; col <= row; col++) {
    pattern = pattern + row;
  }
  console.log(pattern);
}

/*
 Pattern 4
output:
1
10
101
1010
10101
*/
//var n = 5;
for (var row = 1; row <= n; row++) {
  var pattern = " ";
  var result = 0;
  for (var col = 1; col <= row; col++) {
    result = col % 2;
    pattern += result;
  }
  console.log(pattern);
}

/*
 Pattern 5
output:
1
00
111
0000
11111
*/
//var n = 5;
for (var row = 1; row <= n; row++) {
  var pattern = " ";
  var result = 0;
  for (var col = 1; col <= row; col++) {
    result = row % 2;
    pattern += result;
  }
  console.log(pattern);
}

/*
Pattern type - 2
 Pattern 6
output:
12345
1234
123
12
1
*/
//var n = 5;
for (var row = n; row >= 1; row--) {
  var pattern = " ";
  for (var col = 1; col <= row; col++) {
    pattern += col;
  }
  console.log(pattern);
}

/*
 Pattern 7
output:
55555
4444
333
22
1
*/
//var n = 5;
for (var row = n; row >= 1; row--) {
  var pattern = " ";
  for (var col = 1; col <= row; col++) {
    pattern += row;
  }
  console.log(pattern);
}

/*
Pattern type - 3
 Pattern 8
output:
1
12
123
1234
12345
1234
1233
12
1
*/
//var n = 5;
for (var row = 1; row <= n; row++) {
  var pattern = " ";
  for (var col = 1; col <= row; col++) {
    pattern += col;
  }
  console.log(pattern);
}

for (var row = n - 1; row >= 1; row--) {
  var pattern = " ";
  for (var col = 1; col <= row; col++) {
    pattern += col;
  }
  console.log(pattern);
}

/*
 Pattern 9
output:
 1
 22
 333
 4444
 55555
 4444
 333
 22
 1
*/
//var n = 5;
for (var row = 1; row <= n; row++) {
  var pattern = " ";
  for (var col = 1; col <= row; col++) {
    pattern += row;
  }
  console.log(pattern);
}

for (var row = n - 1; row >= 1; row--) {
  var pattern = " ";
  for (var col = 1; col <= row; col++) {
    pattern += row;
  }
  console.log(pattern);
}

