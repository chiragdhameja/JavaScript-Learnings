// stars(2);
// function stars(rows) {
//   for (let i = 0; i <= rows; i++) {
//     for (let j = 0; j <= i; j++) {
//       console.log("*");
//     }
//     console.log(" ");
//   }
// }

stars(5);
function stars(rows) {
  for (let i = 1; i <= rows; i++) {
    pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
