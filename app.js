// function getChange(
//   availableCoins = [],
//   changes = [],
//   totalAmount = 0,
//   variableCoin = 0
// ) {
//   const sumOfChanges = changes.reduce((acc, cur) => acc + cur, 0);

//   if (variableCoin === 0 && sumOfChanges === totalAmount) {
//     return {
//       changes,
//       totalCoins: changes.length,
//       sumOfChanges
//     };
//   }

//   if (variableCoin === 0 && sumOfChanges > totalAmount) {
//     const diffCoinChange = totalAmount - sumOfChanges;

//     const indexOfUnwantedCoin =
//       changes.findIndex(diffCoinChange) > -1
//         ? changes.findIndex(diffCoinChange)
//         : changes.findIndex(Math.min(...changes));

//     const filteredCoins = changes.splice(indexOfUnwantedCoin, 1);

//     const sumOfFilteredCoins = filteredCoins.reduce((acc, cur) => acc + cur, 0);

//     return sumOfFilteredCoins > totalAmount || sumOfFilteredCoins < totalAmount
//       ? getChange(availableCoins, filteredCoins, totalAmount, diffCoinChange)
//       : {
//           change: filteredCoins,
//           totalCoins: filteredCoins.length,
//           sumOfFilteredCoins
//         };
//   }

//   const getBestCoinChange = availableCoins.reduce(
//     (acc, cur) => (cur > acc && cur <= variableCoin ? cur : acc),
//     0
//   );

//   changes.push(getBestCoinChange);

//   return getChange(
//     availableCoins,
//     changes,
//     totalAmount,
//     variableCoin - getBestCoinChange
//   );
// }

// const items = [8, 6, 5, 1];

// const targetAmount = 11

// console.log(getChange(items, [], targetAmount, targetAmount));

/** Instructor solution (this is best solution) */

function computeChange(coins, amount) {
  let remainingAmount = amount;

  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0
  }

  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin)
    calculatedChange.selectedCoins[coin] = count;
    calculatedChange.numberOfCoins += count
    remainingAmount = remainingAmount - (coin * count);
  }

  return calculatedChange
}

function computeChangeBruteForce(coins, amount) {
  const results = coins.map((_, i) => computeChange(coins.slice(i), amount))

  const smallestAmountOfCoins = results.reduce((acc, cur) => cur.numberOfCoins < acc.numberOfCoins ? cur : acc)

  return smallestAmountOfCoins
}

console.log(computeChangeBruteForce([8, 6, 5, 1], 11));
