// middle([])
// takesInObj({})

const runMyFunc = function(otherFunc) {
  otherFunc('Where is val coming from???');
};

// const addTwo = function(num) {
//   num += 2;
//   console.log(num);
// };

// runMyFunc(addTwo);

// const myFunc = function(val) {
//   console.log(`this is the value: ${val}`);
// }

// runMyFunc(myFunc);
const myNum = 2;
addTwo(myNum);
addTwo(5);

runMyFunc(function(val) {
  console.log(`this is the value: ${val}`);
});

runMyFunc(val => console.log(`this is the value: ${val}`));

if (err) throw err;

// if (err) {
//   throw err;
// }

const sayHello = function(name) {
  console.log(`hello ${name}`);
};

const sayHello = (name) => {
  console.log(`hello ${name}`);
};

const sayHello = name => {
  console.log(`hello ${name}`);
};

const sayHello = name => console.log(`hello ${name}`);

const addTwo = num => {
  return num + 2;
};

const addTwo = num => num + 2;

const result = addTwo(2); // 4

// function() {}
// () => {}

// x => x * x

