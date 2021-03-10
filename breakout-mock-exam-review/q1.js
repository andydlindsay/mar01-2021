/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // establish a starting minimum value
  let minimumVal = Infinity;

  // loop through the array
  for (const num of arr) {
    // if the current element is less than the current minimum
    if (num < minimumVal) {
      // update the current minimum value
      minimumVal = num;
    }
  }

  // return the minimum value
  return minimumVal;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // return Math.max(...arr);

  // establish a starting maximum value
  let maximumVal = -Infinity;

  // loop through the array
  for (const num of arr) {
    // if the current element is greater than the current maximum
    if (num > maximumVal) {
      // update the current maximum value
      maximumVal = num;
    }
  }

  // return the maximum value
  return maximumVal;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  // get the highest val in arr
  const highest = max(arr);

  // get the lowest val in arr
  const lowest = min(arr);

  // return highest - lowest
  return highest - lowest;
};

// Don't change below:

module.exports = { min, max, range };
