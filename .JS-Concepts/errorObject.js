// 7 Types of Errors in JavaScript

//	AggregateError	An error indicating that multiple errors occurred
//	EvalError		An error has occurred in the eval() function
//	RangeError		An error has occurred with a number "out of range"
//	ReferenceError	An error due to an illegal reference
//	SyntaxError		An error due to a syntax error
//	TypeError		An error due to a type error
//	URIError		An error due to encodeURI()

//	Statements used in Error Handling

//	try: This statement is used to test a block of code for errors
//	catch: This statement is used to handle the error
//	throw: This statement is used to create custom errors.
//	finally: This statement is used to execute code after try and catch regardless of the result.

try {
  greeting("Welcome");
} catch (err) {
  console.log(err.name + "<br>" + err.message);
}