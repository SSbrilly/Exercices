function sumUntil(maxValue) {
  let element = 0;
  for (let index = 0; index <= maxValue; index++) {
    element += index;
  }
  return element;
}

console.log(sumUntil(5));
