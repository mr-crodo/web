'use strict';
// koncepciya
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // metodi
  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWidthText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Teks: ${this.text}, cvet ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWidthText(25, 10, "Salam ay Qaaa", "blue");

div.showMyProps();
console.log(div.calcArea());

// ekzemplari
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());