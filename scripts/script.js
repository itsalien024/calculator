let display = document.querySelector('#display');
let currentContent = document.querySelector('#currentContent')
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
    display.textContent += text;
  })
})

multiply.addEventListener('click', function() {
  if (currentValue.length === 0) {
    currentValue.push(Number(display.textContent));
    currentValue.push("*")
    display.textContent = '';
  }else if (currentValue.length === 2) {
    currentValue.push(Number(display.textContent));
    calculate();
    currentValue = [result];
    currentValue.push('*');
    currentContent.textContent = '= ' + currentValue.join(' ');
    display.textContent = '';
  }else if (currentValue.length === 1) {
    currentValue.push('*');
    display.textContent = '';
  }
})

divide.addEventListener('click', function() {
  if (currentValue.length === 0) {
    currentValue.push(Number(display.textContent));
    currentValue.push("/")
    display.textContent = '';
  }else if (currentValue.length === 2) {
    currentValue.push(Number(display.textContent));
    calculate();
    currentValue = [result];
    currentValue.push('/');
    currentContent.textContent = '= ' + currentValue.join(' ');
    display.textContent = '';
  }else if (currentValue === 1) {
    currentValue.push('/');
  }else if (currentValue.length === 1) {
    currentValue.push('/');
    display.textContent = '';
  }
})

add.addEventListener('click', function() {
  if (currentValue.length === 0) {
    currentValue.push(Number(display.textContent));
    currentValue.push("+")
    display.textContent = '';
  }else if (currentValue.length === 2) {
    currentValue.push(Number(display.textContent));
    calculate();
    currentValue = [result];
    currentValue.push('+');
    currentContent.textContent = '= ' + currentValue.join(' ');
    display.textContent = '';
  }else if (currentValue.length === 1) {
    currentValue.push('+');
    display.textContent = '';
  }
})

subtract.addEventListener('click', function() {
  if (currentValue.length === 0) {
    currentValue.push(Number(display.textContent));
    currentValue.push("-")
    display.textContent = '';
  }else if (currentValue.length === 2) {
    currentValue.push(Number(display.textContent));
    calculate();
    currentValue = [result];
    currentValue.push('-');
    currentContent.textContent = '= ' + currentValue.join(' ');
    display.textContent = '';
  }else if (currentValue.length === 1) {
    currentValue.push('-');
    display.textContent = '';
  }
})

equals.addEventListener('click', function() {
  if (currentValue.length === 2) {
    currentValue[2] = currentValue[0]
    calculate();
    currentContent.textContent = '';
  }else if (currentValue.length === 3) {
    calculate();
    currentContent.textContent = '';
  }
})

clear.addEventListener('click', function() {
  currentValue = [];
  display.textContent = '';
  result = null;
  currentContent.textContent = '';
})

function calculate(currentSign) {
  if (currentValue.length === 3) {
    switch(currentValue[1]) {
      case "*":
        result = currentValue[0] * currentValue[2];
      break;
  
      case "/":
        if (currentValue[2] == 0) {
          alert('Stop It, you cant divide by 0');
          currentValue = [];
          display.textContent = 'Unable to divide by 0';
          currentContent.textContent = '';
        }else {
          result = currentValue[0] / currentValue[2];
        }
      break;
  
      case "+":
        result = currentValue[0] + currentValue[2];
      break;
  
      case "-":
        result = currentValue[0] - currentValue[2];
      break;
    }
    currentValue = [result];
    display.textContent = result; 
  }
}

