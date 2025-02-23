var x = 1;
x = (x++, x);

console.log(x); // 2

// Example #2
for (var a = 0, b =10; a <= 10; a++, b--)
	
// Example #3
function myFunction() {
  var a = 1;
  return (a += 10), a; // 11
}