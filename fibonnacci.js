// function fib(n) {
//   const numbers = [1, 1];

//   for (let index = 2; index < n + 1; index++) {
//     numbers.push(numbers[index - 2] + numbers[index - 1]);
//   }

//   return numbers[n];
// }

// console.log(fib(4));
// console.log(fib(5));

// Recursion

// function fib(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// Recursion with memoization

function fib(n, memo) {
  let result;

  if (memo[n]) return memo[n];

  if (n === 0 || n === 1) result = 1;
  else result = fib(n - 1, memo) + fib(n - 2, memo);

  memo[n] = result;

  return result;
}
