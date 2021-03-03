const user = {
  username: 'jstamos',
  password: '1234',
  coolness: 9,
  obj: {},
  arr: []
};

const arr = user.arr;
// for (const el of arr) { ... }

console.log(user.username);

for (const key in user) {
  console.log(key, user['username']);
}

// const myArr = [1,2,3];
// for (const index in myArr) {
//   console.log(myArr[index]);
// }
