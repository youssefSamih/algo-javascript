function sumNumbers(numbers) {
  // let result = 0; 1

  // for (const number of numbers) { 1
  //   result += number n
  // }

  // return result 1

  return numbers.reduce((sum, curNum) => sum + curNum, 0);
}

console.log(sumNumbers([1, 3, 10, 50]));
