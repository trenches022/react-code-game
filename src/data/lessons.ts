interface Lesson {
  id: number;
  title: string;
  description: string;
  example: string;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Hello World!',
    description: 'In this lesson, you will learn to work with the `return` statement.\n\nWhat is `return`? The `return` statement is used to exit a function and send a value back to the caller. It’s a fundamental part of JavaScript functions, allowing you to output results. For example, you can use it to return a simple string like "Hello World!".\n\nUsage examples: It can return strings, numbers, or even complex objects. Once `return` is called, the function stops executing.',
    example: 'function sayHello() {\n  return "Hello World!";\n}\n\nconsole.log(sayHello()); // "Hello World!"',
  },
  {
    id: 2,
    title: 'Variables and Data Types',
    description: 'In this lesson, you will learn to work with variables and data types.\n\nWhat are variables? Variables are containers for storing data values, declared using `let`, `const`, or `var`. JavaScript supports various data types like numbers, strings, and booleans. Using `let` allows you to reassign values, making it flexible for dynamic data.\n\nUsage examples: Assign a number to a variable and use it in calculations or display it.',
    example: 'let x = 10;\nconsole.log(x); // 10\nx = 20;\nconsole.log(x); // 20',
  },
  {
    id: 3,
    title: 'Functions',
    description: 'In this lesson, you will learn to work with functions.\n\nWhat are functions? Functions are reusable blocks of code that perform a specific task. They can take parameters (inputs) and use `return` to output a result. Functions help organize code and reduce repetition.\n\nUsage examples: A function can add two numbers and return their sum.',
    example: 'function sum(a, b) {\n  return a + b;\n}\n\nconsole.log(sum(3, 5)); // 8',
  },
  {
    id: 4,
    title: 'Conditional Statements',
    description: 'In this lesson, you will learn to work with conditional statements.\n\nWhat are conditional statements? They allow you to execute code based on conditions using `if`, `else if`, and `else`. The modulo operator (`%`) checks remainders, useful for tasks like determining if a number is even.\n\nUsage examples: Check if a number is even or odd.',
    example: 'function isEven(num) {\n  if (num % 2 === 0) {\n    return true;\n  }\n  return false;\n}\n\nconsole.log(isEven(4)); // true',
  },
  {
    id: 5,
    title: 'Loops',
    description: 'In this lesson, you will learn to work with loops.\n\nWhat are loops? Loops repeat a block of code until a condition is met. The `for` loop is great for iterating over a range of numbers, like summing values from 1 to n.\n\nUsage examples: Calculate the sum of numbers in a sequence.',
    example: 'function sumNumbers(n) {\n  let sum = 0;\n  for (let i = 1; i <= n; i++) {\n    sum += i;\n  }\n  return sum;\n}\n\nconsole.log(sumNumbers(5)); // 15',
  },
  {
    id: 6,
    title: 'Arrays',
    description: 'In this lesson, you will learn to work with arrays.\n\nWhat are arrays? Arrays are ordered lists of data, accessed by index (starting at 0). They’re useful for storing multiple values in one variable.\n\nUsage examples: Retrieve the first element of an array using its index.',
    example: 'function getFirstElement(arr) {\n  return arr[0];\n}\n\nconsole.log(getFirstElement([1, 2, 3])); // 1',
  },
  {
    id: 7,
    title: 'Object Manipulation',
    description: 'In this lesson, you will learn to work with objects.\n\nWhat are objects? Objects are collections of key-value pairs, ideal for representing structured data. You can access properties using dot notation or brackets.\n\nUsage examples: Combine object properties into a string.',
    example: 'function getFullName(obj) {\n  return obj.firstName + " " + obj.lastName;\n}\n\nconsole.log(getFullName({ firstName: "John", lastName: "Doe" })); // "John Doe"',
  },
  {
    id: 8,
    title: 'Array Methods',
    description: 'In this lesson, you will learn to work with array methods.\n\nWhat are array methods? JavaScript provides built-in methods like `.map()` to transform array elements. `.map()` creates a new array by applying a function to each element.\n\nUsage examples: Double all numbers in an array.',
    example: 'function doubleArray(arr) {\n  return arr.map(num => num * 2);\n}\n\nconsole.log(doubleArray([1, 2, 3])); // [2, 4, 6]',
  },
  {
    id: 9,
    title: 'String Manipulation',
    description: 'In this lesson, you will learn to work with string methods.\n\nWhat are string methods? Methods like `.split()`, `.reverse()`, and `.join()` allow you to manipulate strings. They’re useful for tasks like reversing text.\n\nUsage examples: Reverse a string by splitting it into an array, reversing it, and joining it back.',
    example: 'function reverseString(str) {\n  return str.split("").reverse().join("");\n}\n\nconsole.log(reverseString("hello")); // "olleh"',
  },
  {
    id: 10,
    title: 'Advanced Object Manipulation',
    description: 'In this lesson, you will learn to work with the spread operator.\n\nWhat is the spread operator (`...`)? It expands elements of an iterable (like an object or array) into a new object or array. It’s great for merging objects.\n\nUsage examples: Combine two objects into one.',
    example: 'function mergeObjects(obj1, obj2) {\n  return { ...obj1, ...obj2 };\n}\n\nconsole.log(mergeObjects({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }',
  },
  {
    id: 11,
    title: 'Array Filtering',
    description: 'In this lesson, you will learn to work with the `.filter()` method.\n\nWhat is `.filter()`? It creates a new array with elements that pass a test defined by a function. It’s useful for selecting specific items.\n\nUsage examples: Filter even numbers from an array.',
    example: 'function filterEvenNumbers(arr) {\n  return arr.filter(num => num % 2 === 0);\n}\n\nconsole.log(filterEvenNumbers([1, 2, 3, 4])); // [2, 4]',
  },
  {
    id: 12,
    title: 'Array Reduce',
    description: 'In this lesson, you will learn to work with the `.reduce()` method.\n\nWhat is `.reduce()`? It reduces an array to a single value by applying a function to each element. It’s powerful for tasks like finding the maximum value.\n\nUsage examples: Find the largest number in an array.',
    example: 'function findMax(arr) {\n  return arr.reduce((max, curr) => (curr > max ? curr : max));\n}\n\nconsole.log(findMax([1, 5, 3, 9])); // 9',
  },
  {
    id: 13,
    title: 'Promises',
    description: 'In this lesson, you will learn to work with Promises.\n\nWhat are Promises? Promises represent asynchronous operations that will eventually resolve or reject. They’re often used with `setTimeout` for delays.\n\nUsage examples: Simulate fetching data with a delay.',
    example: 'function fetchData() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve("Data fetched!"), 1000);\n  });\n}\n\nfetchData().then(data => console.log(data)); // "Data fetched!" after 1s',
  },
  {
    id: 14,
    title: 'Async/Await',
    description: 'In this lesson, you will learn to work with `async/await`.\n\nWhat is `async/await`? It’s a cleaner way to handle Promises, making asynchronous code look synchronous. `async` declares a function as asynchronous, and `await` pauses execution until a Promise resolves.\n\nUsage examples: Wait for data to be fetched.',
    example: 'async function fetchDataAsync() {\n  const data = await new Promise(resolve => {\n    setTimeout(() => resolve("Data fetched!"), 1000);\n  });\n  return data;\n}\n\nfetchDataAsync().then(console.log); // "Data fetched!" after 1s',
  },
  {
    id: 15,
    title: 'Error Handling',
    description: 'In this lesson, you will learn to work with error handling.\n\nWhat is error handling? It’s the process of managing errors gracefully, often with conditionals or `try/catch`. It prevents crashes, like division by zero.\n\nUsage examples: Handle division safely.',
    example: 'function divideNumbers(a, b) {\n  if (b === 0) {\n    return "Division by zero is not allowed";\n  }\n  return a / b;\n}\n\nconsole.log(divideNumbers(10, 0)); // "Division by zero is not allowed"',
  },
  {
    id: 16,
    title: 'Closures',
    description: 'In this lesson, you will learn to work with closures.\n\nWhat are closures? A closure is a function that remembers its outer scope’s variables, even after the outer function finishes. It’s useful for maintaining state.\n\nUsage examples: Create a counter that increments.',
    example: 'function createCounter() {\n  let count = 0;\n  return function() {\n    return ++count;\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2',
  },
  {
    id: 17,
    title: 'Destructuring',
    description: 'In this lesson, you will learn to work with destructuring.\n\nWhat is destructuring? It’s a syntax to unpack values from arrays or properties from objects into variables. It simplifies code readability.\n\nUsage examples: Extract coordinates from an object.',
    example: 'function getCoordinates(obj) {\n  const { x, y } = obj;\n  return [x, y];\n}\n\nconsole.log(getCoordinates({ x: 1, y: 2 })); // [1, 2]',
  },
  {
    id: 18,
    title: 'Higher-Order Functions',
    description: 'In this lesson, you will learn to work with higher-order functions.\n\nWhat are higher-order functions? They are functions that take other functions as arguments or return them. They’re powerful for abstracting behavior.\n\nUsage examples: Repeat an action multiple times.',
    example: 'function repeatAction(n, action) {\n  for (let i = 0; i < n; i++) {\n    action();\n  }\n}\n\nrepeatAction(3, () => console.log("Hi")); // "Hi" x3',
  },
  {
    id: 19,
    title: 'Working with Dates',
    description: 'In this lesson, you will learn to work with the `Date` object.\n\nWhat is the `Date` object? It’s a built-in JavaScript object for handling dates and times. You can use it to get the current year or perform date calculations.\n\nUsage examples: Get the current year.',
    example: 'function getCurrentYear() {\n  return new Date().getFullYear();\n}\n\nconsole.log(getCurrentYear()); // e.g., 2025',
  },
  {
    id: 20,
    title: 'Chaining Methods',
    description: 'In this lesson, you will learn to work with method chaining.\n\nWhat is method chaining? It’s calling multiple array methods in sequence, where each method returns an array for the next to use. It’s efficient for data processing.\n\nUsage examples: Filter, map, and reduce an array in one go.',
    example: 'function processArray(arr) {\n  return arr\n    .filter(num => num % 2 === 0)\n    .map(num => num * 2)\n    .reduce((sum, num) => sum + num, 0);\n}\n\nconsole.log(processArray([1, 2, 3, 4])); // 12 (2*2 + 4*2)',
  },
];

export default lessons;