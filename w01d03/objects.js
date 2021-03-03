// const studentOneName = 'Alice';
// const studentOneCohort = 'Mar 01 2021';
// const studentOneAge = 24;

const studentOne = {
  'cohort': 'Mar 01 2021',
  'age': 24,
  '7': 'does this work?',
  friends: ['Bob', 'Carol']
};

const funcReturnObj = function(name) {
  const myObj = {
    name: name
  };
  return myObj;
};

const returnVal = funcReturnObj('Carol');
console.log('returnVal', returnVal);

studentOne.name = 'Bob';

console.log(`my name is ${studentOne.name} and I am in the ${studentOne.cohort} cohort`);

studentOne.named = studentOne.name;
delete studentOne.name;

const myArr = [{ name: 'Bob' }];

const friendsKey = 'friends';
studentOne[friendsKey][1] = 'Elise';
studentOne.friends.push('Dean');
const sliced = studentOne.friends.slice(1);
console.log(studentOne[friendsKey][1]);
const whateverWeWant = studentOne.friends;
console.log(whateverWeWant);

// const studentOneArr = ['Alice', 'Mar 01 2021', 24];

// console.log(studentOne['7']);

const students = [studentOne];
console.log(students);

// const myFunc = function() {};
// myFunc();

// console['log'](studentOne);
// console.log(studentOne);

// const myKey = 'first name';

// studentOne[myKey] = 'Alice';
// studentOne['myKey'] = 'Alice';
// studentOne.name = 'Alice';


// const studentTwoName = 'Bob';