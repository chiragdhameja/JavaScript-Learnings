console.log(sumMul(10));

function sumMul(limit) {
  let add = 0;

  for (let c = 0; c <= limit; c++) {
    if (c % 3 === 0 || c % 5 === 0) {
      add = add + c;
    }
  }
  return add;
}
