// console.log()
// Math.floor
// Math.round()
// Math.abs(-5);

// abs
// min
// max
// round

// console.warn('what??');

// console.info('this turns blue');

// iGetHoisted('before the definition');

// myFunc('do I get hoisted?');

// const myFunc = function(message) {
//   console.log(`this is your message: ${message}`);
// };

// const objWithFuncs = {
//   name: 'whatever',
//   myFunc: function(message) {
//     const h = 'hello';
//     console.log(`this is your message: ${message}`);
//   }
// };

// objWithFuncs.myFunc('hello world');
  
  
// function iGetHoisted (message) {
//   console.log(`this is your message: ${message}`);
// };

const log = function(){};
console.log();
log();

const deworm = function() {};

const sayHello = function() {
  console.log(`hi! my name is ${this.name}!`);
};

const dogName = 'Diogee';

const myDog = {
  name: dogName, // Dioji
  tail: true,
  legs: 4,
  goodness: 5,
  traumatizingPowers: false,
  drool: true,
  friendliness: 9,
  worms: true,
  stomach: [],
  deworm: function() {
    this.worms = false;
  },
  eat: function(foodItem) {
    this.stomach.push(foodItem);
    console.log(this.stomach);
  }
};

myDog.sayHello = sayHello;

console.log(myDog.worms);
myDog.deworm();
console.log(myDog.worms);

myDog.name = 'Clifford';

myDog.sayHello();

myDog.stomach.push('eggs');

console.log();

myDog.eat('kibble');
myDog.eat('leftovers');
