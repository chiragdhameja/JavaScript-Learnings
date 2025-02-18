// regular function:
function createCircle1() {
  return {
    radius: 1,
    draw: function () {
      console.log("Draw");
    },
  };
}
// usage:
let circle1 = createCircle1();
console.log(circle1);

// factory function:
function createCircle2(radius) {
  return {
    radius, // = radius: radius
    draw() {
      console.log("Draw");
    },
  };
}
// usage:
let circle2 = createCircle2(1);
console.log(circle2);

let circle3 = createCircle2(3);
console.log(circle3);
