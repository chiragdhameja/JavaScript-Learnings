function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (checkPrime(number)) {
      console.log(number);
    }
  }
}

function checkPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}

showPrimes(200);

// multiple functions used for better re-usability (could be done in a single function)

// for (let number = 2; number <= limit; number++) {
//     let isPrime = true;
//     for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime == true) {
//       console.log(number);
//     }
//     //console.log(isPrime);
//   }
// }

// showPrimes(2000000000);
