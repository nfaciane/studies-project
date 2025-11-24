/**
 * OPERATORS:
 * 
 * 0: Operators are symbols that perform operations on values and variables. JavaScript
 * has different types of operators that allow you to perform calculations, compare
 * values, make decisions, and assign values. Understanding operators is essential
 * for writing expressions and controlling program flow.
 * 
 * 1. Assignment operators assign values to variables and can combine assignment with
 * other operations.
 * 
 * 2. Arithmetic operators perform mathematical operations on numbers.
 * 
 * 3. Comparison operators compare two values and return a boolean result (true or false).
 * They include == (loose equality), === (strict equality), != (loose inequality),
 * !== (strict inequality), < (less than), > (greater than), <= (less than or equal),
 * and >= (greater than or equal).
 * 
 * 4. Logical operators combine boolean values and return a boolean result. They
 * include && (AND - both conditions must be true), || (OR - at least one condition
 * must be true), and ! (NOT - reverses the boolean value). Logical operators are
 * commonly used in conditional statements.
 * 
 * 5. Unary operators work on a single operand and include typeof returns the data type of a
 * value as a string. The ! operator (logical NOT) reverses a boolean value. The -
 * operator (negation) changes the sign of a number to its opposite.
 * 
 * 6. The ternary operator (conditional operator) is a shorthand for if-else statements
 * and takes three operands.
 * 
 */

// 1. Assignment operators //
var x = 10; // basic assignment
console.log(x); // prints => 10

x += 5; // add and assign (x = x + 5)
console.log(x); // prints => 15

x -= 3; // subtract and assign (x = x - 3)
console.log(x); // prints => 12

x *= 2; // multiply and assign (x = x * 2)
console.log(x); // prints => 24

x /= 4; // divide and assign (x = x / 4)
console.log(x); // prints => 6

x %= 4; // modulo and assign (x = x % 4)
console.log(x); // prints => 2

// 2. Arithmetic operators //
var a = 20;
var b = 8;

var sum = a + b; // addition
console.log(sum); // prints => 28

var difference = a - b; // subtraction
console.log(difference); // prints => 12

var product = a * b; // multiplication
console.log(product); // prints => 160

var quotient = a / b; // division
console.log(quotient); // prints => 2.5

var remainder = a % b; // modulo (remainder)
console.log(remainder); // prints => 4

var power = 2 ** 3; // exponentiation
console.log(power); // prints => 8

var combined = (10 + 5) * 2; // order of operations
console.log(combined); // prints => 30

// 3. Comparison operators //
var num1 = 10;
var num2 = 20;
var str = '10';

console.log(num1 === num2); // strict equality - false
console.log(num1 === num1); // strict equality - true
console.log(num1 == str); // loose equality - true (converts type)
console.log(num1 === str); // strict equality - false (different types)

console.log(num1 !== num2); // strict inequality - true
console.log(num1 != str); // loose inequality - false (converts type)

console.log(num1 < num2); // less than - true
console.log(num1 > num2); // greater than - false
console.log(num1 <= 10); // less than or equal - true
console.log(num2 >= 20); // greater than or equal - true

// 4. Logical operators //
var age = 25;
var hasLicense = true;

var canDrive = age >= 18 && hasLicense; // AND operator
console.log(canDrive); // prints => true (both conditions true)

var isWeekend = false;
var hasMoney = true;

var canGoCinema = isWeekend || hasMoney; // OR operator
console.log(canGoCinema); // prints => true (at least one condition true)

var isRaining = true;
var shouldStayInside = isRaining; // NOT operator
console.log(!shouldStayInside); // prints => false (reverses boolean)

var logicalExpression = (10 > 5) && (8 < 12) || (3 === '3');
console.log(logicalExpression); // prints => true

// 5. unary operators (!, typeof, -)
// ! (NOT) operator //
var isTrue = true;
console.log(!isTrue); // prints => false (reverses boolean)

var isFalse = false;
console.log(!isFalse); // prints => true

var condition = 10 > 5;
console.log(!condition); // prints => false (reverses boolean expression)

// typeof operator //
var num = 42;
console.log(typeof num); // prints => number

// - (negation) operator //
var positive = 10;
console.log(-positive); // prints => -10 (negates number)

var negative = -5;
console.log(-negative); // prints => 5 (negates negative to positive)

var result = -(2 + 3);
console.log(result); // prints => -5

// Ternary operator //
var age = 20;
var status = age >= 18 ? 'Adult' : 'Minor';
console.log(status); // prints => Adult

var num = 10;
var result = num % 2 === 0 ? 'Even' : 'Odd';
console.log(result); // prints => Even