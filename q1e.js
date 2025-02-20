// /*g. Discuss the advantages of using array methods (map, filter) over traditional loops in this scenario.


// 1.	Concise and Readable Code:
// Using methods like map and filter makes the code more declarative, meaning we describe what we want to do rather than how to do it.
// Traditional loops (for, while) require more lines of code, making them less readable.

// 2.	Immutability :
// 	map and filter return new arrays instead of modifying the original array.
// 	Traditional loops often modify existing arrays, which can lead to unintended side effects.

// 3.	Built-in Optimization:
// JavaScript’s built-in array methods are optimized under the hood for better performance in most cases.
// Looping manually may introduce inefficiencies if not handled well.

// 4.	Functional Programming Style
// Methods like map and filter encourage functional programming, making code easier to maintain and test.
// They allow chaining (e.g., users.filter(...).map(...)), which reduces the need for intermediate variables.

// 5.	Less Error-Prone:
// Traditional loops require managing indexes (i or j), which can lead to off-by-one errors or incorrect increments.
// map and filter abstract away these complexities, reducing the chances of mistakes.

