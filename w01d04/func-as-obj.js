const sayHello = function(name) {
  console.log(`hello ${name}`);
};

console.log(typeof sayHello);

sayHello.mySecretKey = 'hello there!!';

console.log(sayHello.mySecretKey);

sayHello['somethingElse'] = 'more stuff';

console.log(sayHello.somethingElse);
