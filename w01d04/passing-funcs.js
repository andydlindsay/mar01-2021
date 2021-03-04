// higher order function
// the function passed in is called a callback
const runMyFunc = function(otherFunc) {
  // console.log(otherFunc.toString());
  // otherFunc.helloThere = 'hello there from the key/value pair';
  otherFunc(5); // sayHello()
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

sayHello('Elise');

const addTwo = function(num) {
  num += 2;
  console.log(num);
};

runMyFunc(sayHello);
// console.log(sayHello.helloThere);
runMyFunc(addTwo);
// runMyFunc();
