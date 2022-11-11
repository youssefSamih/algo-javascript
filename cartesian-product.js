// function maskEmail(email = "") {
//   const emailPart1 = email.split("@")[0];
//   const emailPart2 = email.split("@")[1];

//   const hiddenEmailPart1 = emailPart1
//     .split("")
//     .map((char, i) => {
//       if (i == 0 || i == emailPart1.length - 1) {
//         return char;
//       }

//       return "*";
//     })
//     .join("");

//   const hiddenEmailPart2 = emailPart2
//     .split("")
//     .map((char, i) => {
//       if (i < 1 || i >= emailPart2.indexOf(".") - 1) {
//         return char;
//       }

//       return "*";
//     })
//     .join("");

//   return `${hiddenEmailPart1}@${hiddenEmailPart2}`;
// }

// console.log(maskEmail("youssef.97@gmail.com"));


function cartProduct(setA, setB) {
  const product = [];

  for (const setAEl of setA) {
    if (!Array.isArray(setEl)) {
      setAEl = [setAEl];
    }

    for (const setBEL of setB) {
      product.push([...setAEl, setBEL]);
    }
  }

  return product;
}

function cartesian(...sets) {
  let tempProduct = sets[0];

  for (let index = 1; index < sets.length; index++) {
    const element = sets[index];
    
    tempProduct = cartProduct(tempProduct, element)
  }

  return tempProduct;
}

console.log();
