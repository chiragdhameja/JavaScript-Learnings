// divisible by 3 => Fizz
// divisible by 5 => Buzz
// divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 and 5 => input
// Not a number => 'Not a number'

let num = 3;
fizzBuzz(num);

function fizzBuzz(a) {
  if (typeof a != "number") {
    console.log(NaN);
  } else if (a % 3 === 0 && a % 5 === 0) {
    console.log("FizzBuzz");
  } else if (a % 3 === 0) {
    console.log("Fizz");
  } else if (a % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(a);
  }
}
