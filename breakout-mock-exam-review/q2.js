/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// [6,2,3,4,9,6,1,0]
//  0,1,2,3,4,5,6,7

//  8 => 3 and 4
//  8 / 2 === 4
//  3 === 4 - 1

const median = function(arr) {
  // sort the array
  arr.sort();

  // calculate middle index
  const middleIndex = Math.floor(arr.length / 2);

  // check the array length
  if (arr.length % 2 === 0) {
    // if even, return the average of the two middle elements
    const secondIndex = middleIndex - 1;
    const valOne = arr[middleIndex];
    const valTwo = arr[secondIndex];
    const average = (valOne + valTwo) / 2;
    return round(average);
  } else {
    // if odd, return the middle element
    return arr[middleIndex];
  }
};

// Don't change below:
module.exports = { median };
