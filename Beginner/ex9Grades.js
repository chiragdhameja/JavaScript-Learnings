// const marks = [20, 64, 88, 90];

// function calcGrade(marks) {
//   let sum = 0;
//   for (let c = 0; c < marks.length; c++) {
//     sum += marks[c];
//   }
//   let avg = sum / marks.length;
//   console.log(avg);
//   if(avg < 60)
//     return "F";
//   else if(avg >= 60){
//     if(avg <= 100 && avg >= 90)
//         return "A";
//     else if(avg < 90 && avg >= 80)
//         return "B";
//     else if(avg < 80 && avg >= 70)
//         return "C";
//     else if(avg < 70 && avg >= 60)
//         return "D";
//     else return "Wrong";
//   }

// }
// console.log(calcGrade(marks));

const marks = [20, 64, 88, 90];

console.log(calcGrade(marks));

function calcAvg(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / array.length;
}

function calcGrade(avg) {
  avg = calcAvg(marks);
  if (avg < 60) return "F";
  if (avg < 70) return "D";
  if (avg < 80) return "C";
  if (avg < 90) return "B";
  if (avg <= 100) return "A";
  return "Wrong";
}
