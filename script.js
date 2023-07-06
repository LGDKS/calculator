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

/* let numberOne = 3;
let operator = '+';
let numberTwo = 5; */

const operate = function (numberOne, operator, numberTwo) {
  switch (operator) {
    case '+':
      return add(numberOne, numberTwo);
    case '-':
      return substract(numberOne, numberTwo);
    case '*':
      return multiply(numberOne, numberTwo);
    case '/':
      return divide(numberOne, numberTwo);
    default:
      console.log('DEFAULT');
      break;
  }
};
