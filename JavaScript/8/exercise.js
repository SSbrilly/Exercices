function multiplyByTwo(value) {
  let number1 = 2;
  function inner() {
    console.log(number1);
    return number1 * value
  }
  console.log(inner);
  return inner
}
  
console.log(multiplyByTwo(4)());