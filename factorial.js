function fact(number) {
  // let factorialResult = number;

  // for (let index = number - 1; index >= 1; index--) {
  //   factorialResult *= index;
  // }

  // return factorialResult;

  return number >= 2 ? number * fact(number - 1) : number;
}

fact(3);
