function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime == true) {
      console.log(number);
    }
    //console.log(isPrime);
  }
}

showPrimes(2000000000);
