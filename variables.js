/**
 * VARIABLES:
 * 
 * 0: To hold things in memory during the life cycle of our program, we
 * can create variables. Variables are named identifiers that can point to 
 * values of a particular type, like a Number, String, Array, Object, or another
 * datatype. Variables are called so because we can change the value--and type of
 * value--to which they point.
 * 
 * 1. Declaration creates a variable in memory by name or symbol. Assignment uses the assignment operator and
 * gives a variable a value or updated value.
 * 
 * 2. Variables are declared using var, let, or const.
 * Each have different rules with variable reassignment, variable scope, and hoisting behavior.
 * 
 * 3. Hoisting is when a declared variable is moved to the top of the function scope before the code is executed. 
 * This is important because hoisting can change what value a function returns.
 * 
 */

// 1. Declaration AND ASSIGNMENT//
var myName; // variable declared but not assigned a value
console.log(myName); // prints => undefined

myName = 'John'; // varaiable assigned now holds a value
console.log(myName); // prints => John
//also an example of reassignment using var; myName=undefined to myName=John

// 2. Comparing var, let, and const //
//var
//var - reassignment
var x = 'var value';
x = 'new var value'; // can be reassigned
console.log(x); // prints => new var value

//var - scope
//Function scope example using var
function varFunctionScope() {
    if (true) {
      var message = 'Hello from var'; //var is accessible outside the if block
    }
    console.log(message); // prints => Hello from var (accessible outside if block)
  }
  //call function
  varFunctionScope();

//let
//let - reassignment
let y = 'let value';
y = 'new let value'; // can be reassigned
console.log(y); // prints => new let value

//let - scope
//Block scope using var
function letBlockScope() {
    if (true) {
      let greeting = 'Hello from let'; //let is NOT accessible outside the if block
      console.log(greeting); // prints => Hello from let (accessible inside block)
    }
    // console.log(greeting); // ERROR: greeting is not defined (not accessible outside if block)
  }
  letBlockScope();

//const
//const - reassignment
const z = 'const value';
// z = 'new const value'; // ERROR: Assignment to constant variable
console.log(z); // prints => const value

//const - scope
//Block scope using const
function constBlockScope() {
    if (true) {
      const PI = 3.14159; //const is NOT accessible outside the block
      console.log(PI); // prints => 3.14159 (accessible inside block)
    }
    // console.log(PI); // ERROR: PI is not defined (not accessible outside if block)
  }
  constBlockScope();

// 3: Hoisting
//Hoisting using var
console.log(hoistedVar); // prints => undefined (hoisted to top of scope)
var hoistedVar = 'assigned later';
console.log(hoistedVar); // prints => assigned later

//Hoisting using let
//accessing let before declaration throws error
function letHoistingExample() {
    // console.log(myLet); // ERROR: Cannot access 'myLet' before initialization
    let myLet = 'assigned now';
    console.log(myLet); // prints => assigned now
  }
  letHoistingExample();

//Hoisting using const
//accessing const before declaration throws error
function constHoistingExample() {
    // console.log(myConst); // ERROR: Cannot access 'myConst' before initialization
    const myConst = 'assigned now';
    console.log(myConst); // prints => assigned now
  }
  constHoistingExample();

  //Hoisting using functions
  //Function declarations are fully hoisted//
sayHello(); // Can call before declaring
// prints => Hello! Function was hoisted.

function sayHello() {
  console.log('Hello! Function was hoisted.');
}

