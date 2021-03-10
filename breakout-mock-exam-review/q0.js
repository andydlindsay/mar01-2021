/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  const result = arr.length;
  return result;

  // return arr.length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // declare a variable to hold the total
  let total = 0;

  // iterate through the array
  for (const num of arr) {
    // add each element to the total variable
    total += num;
  }

  // return the total
  return total;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
  // 3.14158723
  // 314.158723
  // 314
  // 3.14
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  // check precondition
  // check if array has no values, if so, return null
  if (arr.length === 0) {
    return null;
  }

  // total the array elements
  const total = sum(arr);

  // get the amount of array elements
  const numOfElements = count(arr);

  // divide the total by the numOfElements
  const average = total / numOfElements;

  // return the rounded total
  return round(average);
};

// Don't change below:
module.exports = { count, sum, mean };
