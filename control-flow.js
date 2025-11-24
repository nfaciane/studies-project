/**
 * CONTROL FLOW:
 * 
 * 0: Control flow refers to the order in which statements are executed in a program.
 * By default, code runs line by line from top to bottom. Control flow statements allow
 * you to change this order by executing different code based on conditions. This enables
 * your program to make decisions and behave differently based on different inputs or
 * circumstances.
 * 
 * 1. The if statement evaluates a condition and executes the code block only if the
 * condition is true. If the condition is false, the code block is skipped. The condition
 * must be a boolean value or an expression that evaluates to a boolean.
 * 
 * 2. The else if statement provides an alternative block of code to execute if the
 * previous condition was false and a new condition is true.
 * 
 * 3. The else statement does not have a condition;
 * it always executes if the previous conditions are false.
 * 
 * 4. The switch statement allows you to execute different blocks of code based on
 * different cases, and is useful for multiple possible conditions to check.
 * 
 */

// 1. If statement //
var age = 18;

if (age >= 18) {
  console.log('You are an adult'); // prints => You are an adult
}

// 2. If else if statement //
var score = 75;

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C'); // prints => Grade: C
} else if (score >= 60) {
  console.log('Grade: D');
}

// 3. Else //
// If/else
var isRaining = true;

if (isRaining) {
  console.log('Take an umbrella'); // prints => Take an umbrella
} else {
  console.log('You do not need an umbrella');
}

// If/If-else/else
var age = 15;

if (age >= 18) {
  console.log('You can vote');
} else if (age >= 16) {
  console.log('You can drive');
} else {
  console.log('You are too young'); // prints => You are too young
}

// 4. Switch statement //
var day = 3;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday'); // prints => Wednesday
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  default:
    console.log('Weekend');
}