// In javaScript we can add or remove properties from an object dynamically

const circle = {
  radius: 1,
};

circle.color = "yellow";
circle.draw = function () {};

delete circle.color;

console.log(circle);

// NOTE: 'const' cant be reassigned but properties of that const object can change
