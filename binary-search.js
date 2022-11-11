// binary search works only in sorted array

// function findElement(sortedArr, element) {
//   let startIndex = 0;
//   let endIndex = sortedArr.length - 1;

//   while (startIndex <= endIndex) {
//     const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

//     if (element === sortedArr[middleIndex]) {
//       return middleIndex
//     }

//     if (sortedArr[middleIndex] < element) {
//       startIndex = middleIndex + 1
//     } else {
//       endIndex = middleIndex - 1
//     }
//   }
// }

// Recursive findElement

function findElement(sortedArr, element) {
    let startIndex = 0;
  let endIndex = sortedArr.length - 1;

    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (element === sortedArr[middleIndex]) {
      return middleIndex
    }

    if (sortedArr[middleIndex] < element) {
      startIndex = middleIndex + 1
    } else {
      endIndex = middleIndex - 1
    }

    return findElement(sortedArr.slice(startIndex, endIndex), element)
}


console.log(findElement([1, 6, 13, 99, 100], 99))
