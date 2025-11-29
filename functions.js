/**
 * FUNCTIONS:
 * 
 * 0: First we must DECLARE a function. Next we can INVOKE or EXECUTE a function.
 * 
 * 1: Parameters are value placeholders. Arguments are
 * the actual values passed to the function when it is called.
 * 
 * 2: A named function is declared using the function keyword, followed by a name,
 * parentheses for parameters, and a code block.
 * 
 * 3: A function can be assigned to a variable as a function expression using the assignment operator.
 * 
 * 4: Function inputs are specified using parameters in the function definition. Function
 * outputs are specified using the return statement.
 * 
 * 5: Parent scope refers to the scope of the function that contains another function.
 * Global scope refers to the outermost scope accessible everywhere in the program.
 * 
 * 6: A closure is a function that has access to variables from its parent scope even
 * after the parent function has finished executing.
 * 
 */

// 1. DECLARING vs CALLING
// Declare a function //
function square(num) {
    return num * num;
  }
  
  // Calling the function //
  console.log(square(5));  // prints => 25
  console.log(square(10)); // prints => 100
  
  //Declare a function expression //
  var double = function(num) {
    return num * 2;
  };
  
  // Calling the function expression //
  console.log(double(7));  // prints => 14
  console.log(double(15)); // prints => 30

// 2. parameters vs arguments (passed)
function greet(name, age) {  // name and age are parameters
    return 'Hello, ' + name + '! You are ' + age + ' years old.';
  }
  
  console.log(greet('Alice', 30));  // 'Alice' and 30 are arguments
  // prints => Hello, Alice! You are 30 years old.

// 3. syntax for named function
function calculateArea(width, height) {
    return width * height;
  }
  
  console.log(calculateArea(5, 10));  // prints => 50
  console.log(calculateArea(7, 3));   // prints => 21
  
  function isEven(num) {
    return num % 2 === 0;
  }
  
  console.log(isEven(4));   // prints => true
  console.log(isEven(7));   // prints => false

// 4. assigning a function to a variable
//Example1//
var multiply = function(a, b) {
    return a * b;
  };
  
  console.log(multiply(4, 5));  // prints => 20
  console.log(multiply(10, 3)); // prints => 30
  
  //Example2//
  var sayGoodbye = function(name) {
    return 'Goodbye, ' + name + '!';
  };
  
  console.log(sayGoodbye('Alice'));  // prints => Goodbye, Alice!

// 5. specify function input vs specify function output
//Example1//
function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  var tempF = convertToFahrenheit(25);
  console.log(tempF);  // prints => 77
  
  // Example2// //Function with multiple inputs and one output //
  function calculateTotal(price, taxRate) {
    return price + (price * taxRate);
  }
  
  var total = calculateTotal(100, 0.08);  // price = 100, taxRate = 0.08
  console.log(total);  // prints => 108

// 6. function and scope (parent scope vs global scope)
var globalVariable = 'I am global';  // global scope

function outerFunction() {
  var parentVariable = 'I am in parent scope';  // parent scope
  
  function innerFunction() {
    var innerVariable = 'I am in inner scope';  // local scope
    
    console.log(innerVariable);      // prints => I am in inner scope
    console.log(parentVariable);     // prints => I am in parent scope
    console.log(globalVariable);     // prints => I am global
  }
  
  innerFunction();
  
  // console.log(innerVariable);  // ERROR: innerVariable not accessible here
}

outerFunction();

// console.log(parentVariable);  // ERROR: parentVariable not accessible here (outside function)
console.log(globalVariable);  // prints => I am global (accessible everywhere)

// 7. functions and closures
// Basic closure //
function makeCounter() {
    var count = 0;  // variable in parent scope
    
    return function() {  // inner function (closure)
      count++;
      return count;
    };
  }
  
  var counter = makeCounter();
  console.log(counter());  // prints => 1
  console.log(counter());  // prints => 2
  console.log(counter());  // prints => 3
  
  // Closure with parameter //
  function makeGreeter(greeting) {
    return function(name) {  // inner function remembers 'greeting'
      return greeting + ', ' + name;
    };
  }
  
  var sayHello = makeGreeter('Hello');
  var sayHi = makeGreeter('Hi');
  
  console.log(sayHello('Alice'));  // prints => Hello, Alice
  console.log(sayHi('Bob'));       // prints => Hi, Bob
  
  // Closure for private variables //
  function createBankAccount(initialBalance) {
    var balance = initialBalance;  // private variable
    
    return {
      deposit: function(amount) {
        balance += amount;
        return balance;
      },
      withdraw: function(amount) {
        balance -= amount;
        return balance;
      },
      getBalance: function() {
        return balance;
      }
    };
  }
  
  var account = createBankAccount(100);
  console.log(account.deposit(50));    // prints => 150
  console.log(account.withdraw(30));   // prints => 120
  console.log(account.getBalance());   // prints => 120