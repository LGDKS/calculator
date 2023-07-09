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
  let a = Number(numberOne);
  let b = Number(numberTwo);
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return substract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      console.log('DEFAULT');
      break;
  }
};

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const Cbutton = document.querySelector('#clear');
const Ebutton = document.querySelector('#equal');
let displayValue;
let example;
let numberOne;
let operator;
let numberTwo;

buttons.forEach((button) =>
  button.addEventListener('mousedown', (e) => {
    if (
      e.target.textContent == '+' ||
      e.target.textContent == '-' ||
      e.target.textContent == '*' ||
      e.target.textContent == '/'
    ) {
      display.textContent += ` ${e.target.textContent} `;
      displayValue = ` ${e.target.textContent} `;
    } else if (e.target.textContent == '=') {
      console.log('Equals');
      displayValue = display.textContent;
      example = displayValue.split(' ');
      numberOne = example[0];
      operator = example[1];
      numberTwo = example[2];
      display.textContent = operate(
        Number(numberOne),
        operator,
        Number(numberTwo)
      );
    } else {
      display.textContent += e.target.textContent;
      displayValue = display.textContent;
    }
  })
);

Cbutton.addEventListener('mousedown', (e) => {
  console.log('Clear');
  display.textContent = '';
});

/* Ebutton.addEventListener('mousedown', (e) => {
  console.log('Equals');
  displayValue = display.textContent;
  example = displayValue.split(' ');
  numberOne = example[0];
  operator = example[1];
  numberTwo = example[2];
  display.textContent = operate(Number(numberOne), operator, Number(numberTwo));
}); */

//add one at time like 3+3  tthen +3 then +3  reduce where operate is item?
