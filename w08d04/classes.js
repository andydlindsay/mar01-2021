class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

const rectangle = new Rectangle(4, 3);

// console.log(rectangle);
// console.log(rectangle.area());

class Prism extends Rectangle {
  // constructor(length, width, height) {
  //   super(length, width);
  //   this.height = height;
  // }

  volume() {
    return this.height * this.area();
  }
}

class fourDShape extends Prism {
  constructor(length, width, height, time) {
    super()
    this.time = time;
  }
}

// const fourD = new fourDShape(3, 4, 5, 'meaningless');
// console.log(fourD);

const prism = new Prism('this', 'that', 5);
console.log(prism);
console.log(prism.area());
console.log(prism.volume());
