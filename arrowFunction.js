//  Task 1

const greet = name => `Hello, ${name}!`;
console.log(greet("Ibrahim"));


//  Task 2
// Write a simple arrow function that takes two parameters and returns their sum.
const sum = (num1, num2) => num1+num2;
console.log(sum(1,3));

// Task 3
// Write a simple arrow function that squares a number.
const square = num => num**2;
console.log(square(3));


// Challenge
// Create an arrow function that takes an array of numbers and returns a new array with each number squared.

numbers = [1,2,3,4,5]; 
const squareArray = array => array.map(number => number**2); 
test_output= squareArray(numbers);
console.log(test_output);