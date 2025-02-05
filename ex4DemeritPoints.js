// speed limit = 70
// +5 speed => 1 point
// if speed is 80 => 2 points
// 12+ points = licencse suspended
// use Math.floor()

let speedLimit = 70;
const maxDemerit = 12;
const kmPerPoint = 5;
checkSpeed(110);

function checkSpeed(speed) {
  let points = 0;
  for (let c = speed; c >= speedLimit + kmPerPoint; c -= kmPerPoint) {
    points += 1;
  }
  if (points === 0) {
    console.log("Ok");
  } else if (points >= maxDemerit) {
    console.log("Suspended");
  } else {
    console.log("Points: ", points);
  }
}
