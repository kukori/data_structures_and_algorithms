// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// O(n)
function findFactorialRecursive(number) {
    if(number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
}

// O(n)
function findFactorialIterative(number) {
    let answer = 1;
    for(let i = number; i > 1; i--) {
        answer *= i;
    }
    return answer;
}

// console.log('rec: ', findFactorialRecursive(5));
// console.log('iterative: ', findFactorialIterative(5));



// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3
//For example: fibonacciRecursive(6) should return 8

// O(n)
function fibonacciIterative(n){
    let answer = 0;
    let first = 0;
    let second = 1;
    for(let i = 1; i < n; i++) {
        answer = first + second;
        first = second;
        second = answer;
    }
    return answer
}

// function fibonacciRecursive2(n, first = 0, second = 1) {
//     let answer = first + second;
//     first = second;
//     second = answer;
//     if(n < 3) {
//         return answer;
//     }
//     return fibonacciRecursive(n-1, first, second);
// }

// O(2^n) (two to the power of n - exponential time)
function fibonacciRecursive(n) {
    if(n < 2) {
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

// console.log('rec: ', fibonacciRecursive(8));
// console.log('iterative: ', fibonacciIterative(2));


//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
    let result = '';
    for(let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

function reverseStringRecursive(str) {
    if(str.length === 1) {
        return str;
    }
    return str[str.length-1] + reverseStringRecursive(str.slice(0, -1));
}

console.log('iterative: ', reverseStringIterative('yoyo mastery'));
console.log('rec: ', reverseStringRecursive('yoyo mastery'));