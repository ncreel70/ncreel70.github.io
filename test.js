function addTogether() {
  let sum = (...args) => [...args].reduce((a, b) => a + b, 0);
  return arguments;
}

addTogether(2, 3); //?
