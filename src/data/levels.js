const levels = [
  {
    id: 1,
    title: 'Hello World!',
    description: 'Return "Hello World!"',
    initialCode: '// Type as fast as you can!',
    solution: 'return "Hello World!"',
    hints: ["Use return"],
  },
  {
    id: 2,
    title: 'Variables and Data Types',
    description: 'Declare a variable `x` and assign it the value 10.',
    initialCode: '// Write your code here...',
    solution: 'let x = 10',
    hints: ["Use `let` or `const` to declare a variable."],
  },
  {
    id: 3,
    title: 'Functions',
    description: 'Create a function `sum` that takes two numbers and returns their sum.',
    initialCode: 'function sum(a, b) {\n  // Your code\n}',
    solution: "function sum(a, b) { return a + b; }",
    hints: ["The function should take two arguments.", "Use return."],
  },
  {
    id: 4,
    title: 'Conditional Statements',
    description: 'Write a function `isEven` that returns `true` if a number is even, and `false` if it is odd.',
    initialCode: 'function isEven(n) {\n  // Your code\n}',
    solution: "function isEven(n) { return n % 2 === 0; }",
    hints: ["Use the modulo operator `%` to check evenness."],
  },
  {
    id: 5,
    title: 'Loops',
    description: 'Write a function `sumNumbers` that takes a number `n` and returns the sum of all numbers from 1 to `n`.',
    initialCode: 'function sumNumbers(n) {\n  // Your code\n}',
    solution: "function sumNumbers(n) { let sum = 0; for (let i = 1; i <= n; i++) { sum += i; } return sum; }",
    hints: ["Use a loop to iterate from 1 to n.", "Accumulate the sum in a variable."],
  },
  {
    id: 6,
    title: 'Arrays',
    description: 'Create a function `getFirstElement` that takes an array and returns its first element.',
    initialCode: 'function getFirstElement(arr) {\n  // Your code\n}',
    solution: "function getFirstElement(arr) { return arr[0]; }",
    hints: ["Arrays are zero-indexed.", "Use the index `0` to access the first element."],
  },
  {
    id: 7,
    title: 'Object Manipulation',
    description: 'Write a function `getFullName` that takes an object with `firstName` and `lastName` properties and returns the full name as a string.',
    initialCode: 'function getFullName(person) {\n  // Your code\n}',
    solution: "function getFullName(person) { return person.firstName + ' ' + person.lastName; }",
    hints: ["Access object properties with dot notation."],
  },
  {
    id: 8,
    title: 'Array Methods',
    description: 'Write a function `doubleArray` that takes an array of numbers and returns a new array with each number doubled.',
    initialCode: 'function doubleArray(arr) {\n  // Your code\n}',
    solution: "function doubleArray(arr) { return arr.map(x => x * 2); }",
    hints: ["Use the `.map()` method to transform each element of the array."],
  },
  {
    id: 9,
    title: 'String Manipulation',
    description: 'Write a function `reverseString` that takes a string and returns it reversed.',
    initialCode: 'function reverseString(str) {\n  // Your code\n}',
    solution: "function reverseString(str) { return str.split('').reverse().join(''); }",
    hints: ["You can split the string into an array, reverse the array, and join it back to a string."],
  },
  {
    id: 10,
    title: 'Advanced Object Manipulation',
    description: 'Write a function `mergeObjects` that merges two objects and returns the combined object.',
    initialCode: 'function mergeObjects(obj1, obj2) {\n  // Your code\n}',
    solution: "function mergeObjects(obj1, obj2) { return {...obj1, ...obj2}; }",
    hints: ["Use the spread operator `...` to merge objects."],
  },
  {
    id: 11,
    title: 'Array Filtering',
    description: 'Write a function `filterEvenNumbers` that filters out even numbers from an array.',
    initialCode: 'function filterEvenNumbers(arr) {\n  // Your code\n}',
    solution: "function filterEvenNumbers(arr) { return arr.filter(num => num % 2 === 0); }",
    hints: ["Use the `.filter()` method to filter out elements."],
  },
  {
    id: 12,
    title: 'Array Reduce',
    description: 'Write a function `findMax` that finds the maximum number in an array using `.reduce()` method.',
    initialCode: 'function findMax(arr) {\n  // Your code\n}',
    solution: "function findMax(arr) { return arr.reduce((max, num) => num > max ? num : max, arr[0]); }",
    hints: ["Use `.reduce()` to iterate through the array and find the maximum value."],
  },
];

export default levels;
