function getPermutations(options = [], length) {
  const permutations = [];

  if (length === 1) {
    return options.map(option => [option]);
  }

  const partialPermutations = getPermutations(options, length - 1)

  for (const option of options) {
    for (const existingPermutations of partialPermutations) {
      permutations.push([option].concat(existingPermutations))
    }
  }

  return permutations
}

console.log(getPermutations([1, 2, 3], 3));
