
//  Recursion can be less efficient when it requires additional memory for each function call. 
// Each recursive call gets stored in the call stack, which increases memory usage and can cause 
// stack overflow if the recursion is too deep.

// example for iteration:

function fibonacciIterative(n) {
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
