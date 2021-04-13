// immutable === cannot be changed
// const arr = [];
// arr.push(4);

// const user = {};
// user.username = 'Alice';

const user = {
  username: 'Alice',
  age: 42,
  stomach: ['waffles', 'apple juice']
};

const copy = {
  ...user,
  username: 'Bob',
  stomach: [
    ...user.stomach,
    'tacos'
  ]
};

// copy.stomach.push('tacos');

// copy.username = 'Bob';

console.log(user);
console.log(copy);
