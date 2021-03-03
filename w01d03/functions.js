const num = 5;

const changeToTen = function(givenNumber) {
  givenNumber = 10;
};

console.log('before:', num);
changeToTen(num);
console.log('after:', num);

const myObj = {
  name: 'Alice'
};

const changeNameKey = function(givenObj) {
  givenObj.name = 'Bob';
};

console.log('before:', myObj);

changeNameKey(myObj);

console.log('after:', myObj);
