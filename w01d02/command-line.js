// console.log(process.argv) // Node

// process.argv.shift();
// process.argv.shift();

// process.argv.splice(0, 2);

const sliced = process.argv.slice(2);
// console.log(sliced) // Node

// const hardcoded = ['5', '10', '15', '4.5', '3.14', '-50'];

// for (let i = 0; i < hardcoded.length; i++) {
//   console.log('element', hardcoded[i]);
// }

// console.log();

// i++ === i += 1 === i = i + 1
let total = 0;

for (const element of sliced) {
  const converted = Number(element);

  // if ((conditionOne && conditionTwo) || conditionThree)

  if (Number.isInteger(converted) && converted > 0) {
    // if (converted > 0) {
      // console.log('converted', typeof converted);
      total += converted;
      // total = total + element;
      // console.log('element', element);
    // }
  }
}

console.log(total);

// console.log();

// for (const index in hardcoded) {
//   console.log('element', hardcoded[index]);
// }
