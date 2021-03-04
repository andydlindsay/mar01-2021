// const name = 'Alice';
// const myNum = 47;
// const bool = true;

// const myArr = [1,2,3,4];
// const myObj = { name: 'Alice' };
// const sayHello = function() {};

// function sayHello() {};

const myAge = 39;
const otherAge = myAge;
const yetAnother = otherAge;
// console.log(otherAge);

const sayHello = function(name) {
  console.log(`hello ${name}`);
};

sayHello('Alice');

const otherFunc = sayHello;
const otherFunc = sayHello();

otherFunc('Bob');
