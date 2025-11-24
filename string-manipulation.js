/**
 * STRING MANIPULATION:
 * 
 * 0: String manipulation is creating or modifying
 * strings.
 * 
 * 1. Operators can be used to concatenate (combine) strings together using the +
 * operator or template literals.
 * 
 * 2. String methods are built-in functions that operate on strings to perform
 * specific tasks like extracting characters, converting case, searching for content,
 * and replacing text. Common methods include toUpperCase(),
 * toLowerCase(), charAt(), indexOf(), slice(), join(), split(),
 * replace(), includes(), startsWith(), and endsWith(). String methods do not modify
 * the original string (strings are immutable) but return new strings or values.
 * 
 */

// 1. manipulating strings with operators
//Concatenation with + operator //
var firstName = 'John';
var lastName = 'Doe';
var fullName = firstName + ' ' + lastName;
console.log(fullName); // prints => John Doe

var greeting = 'Hello, ' + firstName + '!';
console.log(greeting); // prints => Hello, John!

//Concatenation with += operator //
var message = 'Welcome';
message += ' to';
message += ' JavaScript';
console.log(message); // prints => Welcome to JavaScript

//Concatenation with expressions inside template literals //
var num1 = 10;
var num2 = 20;
var result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
console.log(result); // prints => The sum of 10 and 20 is 30.

// 2. manipulating strings with string methods
//.split() - convert string to array //
var word = 'hello';
var letters = word.split('');
console.log(letters); // prints => ['h', 'e', 'l', 'l', 'o']

//.join() - convert array to string //
var words = ['Hello', 'World', 'JavaScript'];
var sentence = words.join(' ');
console.log(sentence); //prints => 'Hello World Javascript'

//.toUpperCase() - convert to uppercase //
var message = 'Welcome to JavaScript';
console.log(message.toUpperCase()); // prints => WELCOME TO JAVASCRIPT

//.toLowerCase() - convert to lowercase //
var message = 'Welcome to JavaScript';
console.log(message.toLowerCase()); // prints => welcome to javascript

//.slice() - extract portion of string //
var text = 'JavaScript';
console.log(text.slice(0, 4)); // prints => Java (characters 0-3)
console.log(text.slice(4)); // prints => Script (from index 4 to end)
console.log(text.slice(-6)); // prints => Script (last 6 characters)
console.log(text.slice(1, 5)); // prints => ava (characters 1-4)

//Combining multiple string methods //
var text = 'The quick brown fox';
var newText = text.slice(4, 9).toUpperCase();
console.log(newText); // prints => QUICK

var sentence = 'I love JavaScript';
var words = sentence.toLowerCase().split(' ');
console.log(words); // prints => ['i', 'love', 'javascript']