showNumbers(10);

function showNumbers(number) {
  for (let currNum = 0; currNum <= number; currNum++) {
    console.log(currNum, currNum % 2 ? "'Odd'" : "'Even'");
  }
}
