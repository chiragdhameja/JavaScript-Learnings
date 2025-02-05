// for loop
// for (i = 0; i <= 5; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// while loop
// i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// do-while loop (execute atleast once)
// let i = 9;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i < 5);

// newer better for-in loop
// let person = {
//   name: "Chirag",
//   age: 24,
//   gender: "Male",
// };
// for (let key in person) {
//   console.log(key, ":", person[key]);
// }
// const colors = ["red", "green", "blue"];
// for (let index in colors) {
//   console.log(index + 1, ":", colors[index]);
// }

// for-of loop
// const colors = ["red", "green", "blue"];

// for (let color of colors) {
//   console.log(color);
// }

// breaking loops
let i = 0;
while (i <= 10) {
  if (i === 5) break;
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}
