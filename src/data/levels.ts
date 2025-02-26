interface Level {
  id: number,
  title: string,
  description: string,
  initialCode: string,
  solution: string,
  hints: string[],
}

const levels: Level[] = [
  {
    id: 1,
    title: 'Hello World!',
    description: 'Return "Hello World!"',
    initialCode: '',
    solution: 'return "Hello World!"',
    hints: ["Use return"],
  },
  {
    id: 2,
    title: 'Variables and Data Types',
    description: 'Declare a variable `x` and assign it the value 10.',
    initialCode: '',
    solution: 'let x = 10',
    hints: ["Use `let` or `const` to declare a variable."],
  },
  {
    id: 3,
    title: 'Functions',
    description: 'Create a function `sum` that takes two numbers and returns their sum.',
    initialCode: 'function sum(a, b)',
    solution: "function sum(a, b) { return a + b; }",
    hints: ["The function should take two arguments.", "Use return."],
  },
  {
    id: 4,
    title: 'Conditional Statements',
    description: 'Write a function `isEven` that returns `true` if a number is even, and `false` if it is odd.',
    initialCode: 'function isEven(n)',
    solution: "function isEven(n) { return n % 2 === 0; }",
    hints: ["Use the modulo operator `%` to check evenness."],
  },
  {
    id: 5,
    title: 'Loops',
    description: 'Write a function `sumNumbers` that takes a number `n` and returns the sum of all numbers from 1 to `n`.',
    initialCode: 'function sumNumbers(n)',
    solution: "function sumNumbers(n) { let sum = 0; for (let i = 1; i <= n; i++) { sum += i; } return sum; }",
    hints: ["Use a loop to iterate from 1 to n.", "Accumulate the sum in a variable."],
  },
  {
    id: 6,
    title: 'Arrays',
    description: 'Create a function `getFirstElement` that takes an array and returns its first element.',
    initialCode: 'function getFirstElement(arr)',
    solution: "function getFirstElement(arr) { return arr[0]; }",
    hints: ["Arrays are zero-indexed.", "Use the index `0` to access the first element."],
  },
  {
    id: 7,
    title: 'Object Manipulation',
    description: 'Write a function `getFullName` that takes an object with `firstName` and `lastName` properties and returns the full name as a string.',
    initialCode: 'function getFullName(person)',
    solution: "function getFullName(person) { return person.firstName + ' ' + person.lastName; }",
    hints: ["Access object properties with dot notation."],
  },
  {
    id: 8,
    title: 'Array Methods',
    description: 'Write a function `doubleArray` that takes an array of numbers and returns a new array with each number doubled.',
    initialCode: 'function doubleArray(arr)',
    solution: "function doubleArray(arr) { return arr.map(x => x * 2); }",
    hints: ["Use the `.map()` method to transform each element of the array."],
  },
  {
    id: 9,
    title: 'String Manipulation',
    description: 'Write a function `reverseString` that takes a string and returns it reversed.',
    initialCode: 'function reverseString(str)',
    solution: "function reverseString(str) { return str.split('').reverse().join(''); }",
    hints: ["You can split the string into an array, reverse the array, and join it back to a string."],
  },
  {
    id: 10,
    title: 'Advanced Object Manipulation',
    description: 'Write a function `mergeObjects` that merges two objects and returns the combined object.',
    initialCode: 'function mergeObjects(obj1, obj2)',
    solution: "function mergeObjects(obj1, obj2) { return {...obj1, ...obj2}; }",
    hints: ["Use the spread operator `...` to merge objects."],
  },
  {
    id: 11,
    title: 'Array Filtering',
    description: 'Write a function `filterEvenNumbers` that filters out even numbers from an array.',
    initialCode: 'function filterEvenNumbers(arr)',
    solution: "function filterEvenNumbers(arr) { return arr.filter(num => num % 2 === 0); }",
    hints: ["Use the `.filter()` method to filter out elements."],
  },
  {
    id: 12,
    title: 'Array Reduce',
    description: 'Write a function `findMax` that finds the maximum number in an array using `.reduce()` method.',
    initialCode: 'function findMax(arr)',
    solution: "function findMax(arr) { return arr.reduce((max, num) => num > max ? num : max, arr[0]); }",
    hints: ["Use `.reduce()` to iterate through the array and find the maximum value."],
  },
  {
    id: 13,
    title: 'Promises',
    description: 'Write a function `fetchData` that returns a promise which resolves with the string "Data fetched!" after 1 second.',
    initialCode: 'function fetchData()',
    solution: "function fetchData() { return new Promise((resolve) => setTimeout(() => resolve('Data fetched!'), 1000)); }",
    hints: ["Use `new Promise` to create a promise.", "Use `setTimeout` to delay the resolution."],
  },
  {
    id: 14,
    title: 'Async/Await',
    description: 'Write an async function `fetchDataAsync` that waits for the `fetchData` function to resolve and then returns the result.',
    initialCode: 'async function fetchDataAsync()',
    solution: "async function fetchDataAsync() { const result = await fetchData(); return result; }",
    hints: ["Use `await` to wait for the promise to resolve.", "Make sure to mark the function as `async`."],
  },
  {
    id: 15,
    title: 'Error Handling',
    description: 'Write a function `divideNumbers` that takes two numbers and returns the result of dividing the first by the second. Handle the case where the second number is zero by returning "Division by zero is not allowed".',
    initialCode: 'function divideNumbers(a, b)',
    solution: "function divideNumbers(a, b) { if (b === 0) return 'Division by zero is not allowed'; return a / b; }",
    hints: ["Use an `if` statement to check if the second number is zero.", "Return the result of the division if the second number is not zero."],
  },
];

export default levels;
