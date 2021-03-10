/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

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

const stdev = function(arr) {
  // sqrt(sum((x - populationMean)^2)/numberOfValues)
  const populationMean = sum(arr) / arr.length;
  // set up deviations array
  const deviations = [];
  
  // iterate through the `arr` array
  for (const num of arr) {
    // calculate the deviation from the populationMean
    const deviation = num - populationMean;
    
    // square the deviation
    const squared = Math.pow(deviation, 2);
    
    // push into deviations array
    deviations.push(squared);
  }
  
  // sum the deviations
  const summed = sum(deviations);
  
  // calculate number of values
  const numberOfValues = arr.length;

  // calculate the average deviation
  const averageDeviation = summed / numberOfValues;

  const squareRoot = Math.sqrt(averageDeviation);
  
  // return our rounded squareRoot
  return round(squareRoot);
};

// Don't change below:
module.exports = { stdev };
