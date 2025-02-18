function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const circle = new Circle(1);

// The word 'this.' refers to the new object that is being created by calling the function
// constructors use Pascal notation 'Circle()'
// the word 'new' states the creation of a new object using the Circle() constructor.
