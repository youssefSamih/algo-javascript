function isPrime(number) {
  for (let index = 2; index < Math.sqrt(number); index++) {
    if (number % index === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(9));
console.log(isPrime(5));
