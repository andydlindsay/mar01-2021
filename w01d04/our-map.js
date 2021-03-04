

// take in array
// take in behaviour in the form of a function
const ourMap = (arr, callback) => {
  const returnArr = [];
  
  // iterate through the array
  for (const element of arr) {
    // call the provided callback with each element of the array
    // capture the return value from the callback 
    const returnVal = callback(element);
    // and push it into an array
    returnArr.push(returnVal);
    
    // returnArr.push(callback(element));
  }
  
  // return our new array
  return returnArr;
};

const ourArr = [1, 3, 5, 7];

ourArr.forEach(elem => console.log(elem));

for (const elem of ourArr) {
  console.log(elem);
}

const newArr = ourArr.map((elem) => {
  return elem * 3;
});

const anotherName = (elem) => {
  return elem + 2;
};

const ourNewArr = ourMap(ourArr, anotherName);
const ourAnonArr = ourMap(['alice', 'bob', 'carol'], (name) => `hello ${name}`);

// Immediately Invoked Function Express IIFE
// const ourAnonArr = ourMap(['alice', 'bob', 'carol'], ((name) => `hello ${name}`)());

// const ourAnonArr = ourMap(ourArr, (name) => `hello ${name}`);

console.log(ourArr);
// console.log(newArr);
console.log(ourNewArr);
console.log(ourAnonArr);
