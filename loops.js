/**
 * LOOPS:
 * 
 * 0: Loops are essential for processing collections of data, automating repetitive
 * tasks, and iterating through arrays and objects.
 * 
 * 1. A for loop has three parts separated by semicolons: initialization (sets a counter variable), condition
 * (checked before each iteration), and increment/decrement (updates the counter after
 * each iteration). For loops are useful when you know exactly how many times you need
 * to iterate. Usually used to iterate over an array.
 * 
 * 2. A while loop has three parts the condition, the loop body, and the increment/decrement. Unlike the for-loop the while loop can follow many formats. 
 * Before each iteration, the condition is checked. If it is true, the code block
 * executes. If it becomes false, the loop stops. While loops are useful when you don't
 * know in advance how many iterations you need.
 * 
 * 3. A for-in loop iterates over the properties of an object or the indices of an array.
 * 
 * 4. Looping over arrays forward means starting at index 0 and incrementing through each
 * element. Looping backward means starting at the last index and decrementing.
 * 
 * 5. Looping over an object means iterating through its key-value pairs using a for-in
 * loop or other methods.
 * 
 * 6. Counting up to a limit means starting at a number and incrementing until reaching
 * a specified maximum value.
 * 
 * 7. Counting down to zero means starting at a number and decrementing until reaching zero.
 * 
 */

// 1. For loop //
// For loop - creating loop of given start integer and end integer; excution code: print 'Number:' i to console
for (var i = 1; i <= 5; i++) {
 console.log('Number: ' + i); // prints => Number: 1, Number: 2, Number: 3, Number: 4, Number: 5
}

// For loop - creating loop of given start integer and end integer; execution code: add i to total accumulator
var total = 0;
for (var i = 1; i <= 4; i++) {
 total += i; // add i to total
}
console.log(total); // prints => 10 (1 + 2 + 3 + 4)

// For loop - loop thru word array; execution code: print i to console at each index
var word = 'hello';
for (var i = 0; i < word.length; i++) {
 console.log(word[i]); // prints => h, e, l, l, o
}

// 2. While loop //
// While loop - condition: when count is less than or equal to 5; execution code: print 'Count:' + count, in this case count is our i variable
//increment by 1 until count is greater than 5
var count = 1;

while (count <= 5) {
  console.log('Count: ' + count); // prints => Count: 1, Count: 2, Count: 3, Count: 4, Count: 5
  count++;
}

// While loop - condition: when num is less than or equal to 4; execution code: add num to sum accumulator, in this case num is our i variable, sum is a storage container defined before the loop is declared
//increment by 1 until num is greater than 4
var sum = 0;
var num = 1;

while (num <= 4) {
  sum += num; // add num to sum
  num++;
}
console.log(sum); // prints => 10 (1 + 2 + 3 + 4)

// While loop - condition: when index is less than message array length; execution code: print each index of message array, in this index count is out i variable
//increment by 1 until index reaches end of message array
var message = 'hello';
var index = 0;

while (index < message.length) {
  console.log(message[index]); // prints => h, e, l, l, o
  index++;
}

// 3. loop over array (forward, backward)

// 4. loop over object