/** My solution */

function knapsack(items = [], maxWeight, latestBag = []) {
  console.log("RUNNING");
  const totalBug = latestBag.reduce((acc, cur) => acc + cur.weight, 0);

  if ((!items.length || items.length < 1) && !latestBag.length) {
    return items
  }

  if (totalBug > maxWeight) {
    const maxWeightItemInBag = latestBag.reduce((acc, cur) => cur.weight > acc.weight ? cur : acc);

    const filteredBag = latestBag.filter(itemBag => itemBag.id !== maxWeightItemInBag.id)

    return {
      items: filteredBag,
      weight: filteredBag.reduce((acc, cur) => acc + cur.weight, 0),
      totalValues: filteredBag.reduce((acc, cur) => acc + cur.value, 0),
    }
  }

  if (totalBug === maxWeight) {
    return {
      items: latestBag,
      weight: latestBag.reduce((acc, cur) => acc + cur.weight, 0),
      totalValues: latestBag.reduce((acc, cur) => acc + cur.value, 0),
    }
  }

  const minimumWeightItem = items.reduce((acc, cur) => cur.weight <= acc.weight && cur.value >= acc.value ? cur : acc);

  latestBag.push(minimumWeightItem)

  return knapsack(items.filter(item => item.id !== minimumWeightItem.id), maxWeight, latestBag)
}

const items = [
  {id: "a", value: 3, weight: 3},
  {id: "b", value: 6, weight: 8},
  {id: "c", value: 10, weight: 3},
]

console.log(knapsack(items, 8, []));

/** Instructor solution */

// function knapsackFn(items, cap, itemIndex, memo) {
//   if (memo[cap][itemIndex]) {
//     return memo[cap][itemIndex]
//   }

//   if (cap === 0 || itemIndex < 0) {
//     return {
//       items: [], value: 0, weight: 0
//     }
//   }
  
//   if (cap < items[itemIndex].weight) {
//     return knapsack(items, cap, itemIndex - 1)
//   }

//   const sackWithItem = knapsack(
//     items,
//     cap - items[itemIndex].weight,
//     itemIndex - 1
//   )

//   const sackWithoutItem = knapsack(
//     items,
//     cap,
//     itemIndex - 1
//   );

//   const valueWithItem = sackWithItem.value + items[itemIndex].value;
//   const valueWithoutItem = sackWithoutItem.value

//   let resultSack;

//   if (valueWithItem > valueWithoutItem) {
//     const updatedSack = {
//       items: sackWithItem.items.concat(items[itemIndex]),
//       value: sackWithItem.value + items[itemIndex].value,
//       weight: sackWithItem.weight + items[itemIndex].value,
//     }

//     resultSack = updatedSack
//   } else {
//     resultSack = sackWithoutItem
//   }

//   memo[cap][itemIndex] = resultSack

//   return resultSack
// }

// function knapsack(items, cap, itemIndex) {
//   const mem = Array(cap + 1).fill(Array(items.length).fill(undefined))

//   return knapsackFn(items, cap, itemIndex, mem)
// }

// const items = [
//   {id: "a", value: 3, weight: 3},
//   {id: "b", value: 6, weight: 8},
//   {id: "c", value: 10, weight: 3},
// ]

// console.log(knapsack(items, 8, items.length - 1));
