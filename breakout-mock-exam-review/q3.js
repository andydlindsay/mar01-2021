/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // setup an object to hold our key/value pairs
  const stacks = {};

  // iterate through the arr
  for (const num of arr) {
    // have we seen the number before?
    if (stacks[num]) {
      // if yes, increment the number of times seen
      stacks[num] += 1;
    } else {
      // if no, set up a new key/value pair in the object
      stacks[num] = 1;
    }
  }

  // console.log(stacks);

  // setup two variables: highestValue, and keyName
  let highestValue = -Infinity;
  let keyName;

  // iterate through the stacks object
  for (const key in stacks) {
    // check the value at the current key
    const value = stacks[key];

    if (value > highestValue) {
      // if greater than current highestValue, set highestValue and keyName
      highestValue = value;
      keyName = key;
    }
  }

  // return the key's name
  return keyName;
};

// Don't change below:
module.exports = { mode };
