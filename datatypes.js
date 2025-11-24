/**
 * DATA TYPES:
 * 
 * 0: Data types store different kinds of values.
 * Data types can be simple (primitive) that store single values, 
 * and complex (reference) that store multiple values like collections
 * or functions.
 * 
 * 1. Simple or primitive data types are number, string, boolean, undefined, null,
 * and symbol.
 * 
 * 2. Complex (reference) data types are objects, arrays, and functions.
 * 
 * 3. Simple/Primitive values are passed by copy (passed by value), while objects are passed
 * by reference.
 * 
 * 4. Infinity represents a number larger than the largest possible number in JavaScript.
 * -Infinity represents a number smaller than the smallest possible number. Infinity
 * can result from dividing by zero or exceeding JavaScript's number limits.
 */

// 1. Number data type //
var age = 25; // integer
console.log(age); // prints => 25
console.log(typeof age); // prints => number

// 2. String data type //
var name = 'Alice'; // single quotes
console.log(name); // prints => Alice
console.log(typeof name); // prints => string

// 3. Boolean data type //
var hasGraduated = false;
console.log(hasGraduated); // prints => false

var result = 10 > 5; // boolean expression
console.log(result); // prints => true

// 4. Array data type //
var fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // prints => ['apple', 'banana', 'orange']
console.log(typeof fruits); // prints => object (arrays are objects in JavaScript)

console.log(fruits[0]); // prints => apple (access first element)
console.log(fruits[2]); // prints => orange (access third element)

var mixed = [1, 'hello', true, { name: 'Alice' }]; // array with mixed types
console.log(mixed); // prints => [1, 'hello', true, { name: 'Alice' }]

// 5. Object data type //
var person = {
    name: 'Bob',
    age: 35,
    city: 'Portland'
  };
  console.log(person); // prints => { name: 'Bob', age: 35, city: 'Portland' }
  console.log(typeof person); // prints => object
  
  console.log(person.name); // prints => Bob (dot notation)
  console.log(person['age']); // prints => 35 (bracket notation)
  
  person.job = 'Engineer'; // add new property
  console.log(person); // prints => { name: 'Bob', age: 35, city: 'Portland', job: 'Engineer' }

// 6. Function data type //
function greet(name) {
    return 'Hello, ' + name;
  }
  console.log(typeof greet); // prints => function
  
  var result = greet('Alice');
  console.log(result); // prints => Hello, Alice
  
  var add = function(a, b) {
    return a + b;
  };
  console.log(typeof add); // prints => function
  console.log(add(5, 3)); // prints => 8

// 7. Undefined data type //
var empty;
console.log(empty); // prints => undefined
console.log(typeof empty); // prints => undefined

var result = noReturn(); // prints => This function returns nothing
console.log(result); // prints => undefined

function takesParam(param) {
    console.log(param); // prints => undefined (parameter not provided)
  }
  takesParam();

// null vs undefined//
var x;
var y = null;
console.log(x === undefined); // prints => true
console.log(y === null); // prints => true

// 8. Null data type //
var empty = null;
console.log(empty); // prints => null
console.log(typeof empty); // prints => object (BE AWARE)

// 9. NaN data type //
var result = 'hello' / 2; // invalid mathematical operation
console.log(result); // prints => NaN
console.log(typeof result); // prints => number (NaN is technically a number type)

// 10. Infinity and -Infinity //
var positive = 1 / 0;
console.log(positive); // prints => Infinity
console.log(typeof positive); // prints => number

var negative = -1 / 0;
console.log(negative); // prints => -Infinity

// 11. Simple vs Complex data types //
// Simple data types
var num = 42;
var str = 'hello';
var bool = true;
console.log(typeof num); // prints => number (simple)
console.log(typeof str); // prints => string (simple)
console.log(typeof bool); // prints => boolean (simple)

// Complex data types
var arr = [1, 2, 3];
var obj = { name: 'Alice' };
var func = function() { return 'test'; };
console.log(typeof arr); // prints => object (complex)
console.log(typeof obj); // prints => object (complex)
console.log(typeof func); // prints => function (complex)

// 12. By Copy - primitive data types //
var x = 5;
var y = x; // y gets a copy of the value
y = 10;
console.log(x); // prints => 5 (unchanged)
console.log(y); // prints => 10 (changed copy)

// By Reference - complex data types //
var arr1 = [1, 2, 3];
var arr2 = arr1; // arr2 refers to the same array
arr2[0] = 99;
console.log(arr1); // prints => [99, 2, 3] (changed because same reference)
console.log(arr2); // prints => [99, 2, 3]

// By Reference - objects //
var person1 = { name: 'Alice', age: 30 };
var person2 = person1; // person2 refers to same object
person2.age = 31;
console.log(person1); // prints => { name: 'Alice', age: 31 } (changed)
console.log(person2); // prints => { name: 'Alice', age: 31 }

//By Copy vs By Reference in functions //
function modifyPrimitive(num) {
  num = 100;
}

function modifyObject(obj) {
  obj.value = 100;
}

var primitiveValue = 5;
var complexValue = { value: 5 };

modifyPrimitive(primitiveValue);
console.log(primitiveValue); // prints => 5 (unchanged - passed by copy)

modifyObject(complexValue);
console.log(complexValue); // prints => { value: 100 } (changed - passed by reference)