const add = function (...numbers) {
  const total = numbers.reduce((accumulator, number) => accumulator + number);
  return total;
};

const substract = function (...numbers) {
  const total = numbers.reduce((accumulator, number) => accumulator - number);
  return total;
};

const multiply = function (...numbers) {
  const total = numbers.reduce((accumulator, number) => accumulator * number);
  return total;
};

const divide = function (...numbers) {
  const total = numbers.reduce((accumulator, number) => accumulator / number);
  return total;
};
