let display = document.querySelector('#display');
let buttons = document.querySelectorAll('.buttons');
let operatorButtons = document.querySelectorAll('.operatorButtons')

let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let equals = document.querySelector('.equals');
let clear = document.querySelector('.clear');


let text;
let currentSign;
let currentValue = [];
let total = 1;
let result;

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    let buttonText = button.querySelector('.numbers').textContent;
    text = buttonText;
    display.append(text);
  })
})

multiply.addEventListener('click', function() {
  currentSign = "*";
  return currentSign;
})

divide.addEventListener('click', function() {
  currentSign = "/";
  return currentSign;
})

add.addEventListener('click', function() {
  currentSign = "+";
  return currentSign;
})

subtract.addEventListener('click', function() {
  currentSign = "-";
  return currentSign;
})

equals.addEventListener('click', function() {
  currentSign = "=";
  return currentSign;
})

clear.addEventListener('click', function() {
  currentSign = "c";
  return currentSign;
})

function getValueAfter(currentSign) {
  switch(currentSign) {
    case "*":
      result = currentValue[0] * currentValue[1];
      currentValue[0] = result;
      return currentValue
    break;

    case "/":
      result = currentValue[0] / currentValue[1];
      currentValue[0] = result;
      return currentValue
    break;

    case "+":
      result = currentValue[0] + currentValue[1];
      currentValue[0] = result;
      return currentValue
    break;

    case "-":
      result = currentValue[0] - currentValue[1];
      currentValue[0] = result;
      return currentValue
    break;
  }
}


operatorButtons.forEach(function operatorClear(opButton) {
  opButton.addEventListener('click', function() {
    if (currentValue.length < 2) {
      currentValue.push((Number(display.textContent)));
    }else if (currentValue.length = 2) {
      getValueAfter();
      display.textContent = String(result);
    }
    display.textContent = '';
  })
})


