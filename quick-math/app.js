let inputNum1 = document.getElementById('num1');
let inputNum2 = document.getElementById('num2');
let buttonPlus = document.getElementById('plus');
let buttonMinus = document.getElementById('minus');
let buttonMultiply = document.getElementById('multiply');
let buttonDivide = document.getElementById('divide');
let buttonExponentiation = document.getElementById('exponentiation');
let buttonCompare = document.getElementById('compare');
let inputResult = document.getElementById('result');

function calculator(action) {
  let num1 = parseInt(inputNum1.value);
  let num2 = parseInt(inputNum2.value);
  let result = 0;

  if (isNaN(num1) || isNaN(num2)) {
    inputResult.value = "Insert Number one & Number two";
  } else {
    if (action == "+") {
      result = num1 + num2
    } else if (action == "-") {
      result = num1 - num2
    } else if (action == "*") {
      result = num1 * num2
    } else if (action == "/") {
      result = num1 / num2
    } else if (action == "^") {
      result = Math.pow(num1, num2);
    }
    inputResult.value = result;
  }
}

buttonPlus.addEventListener('click', function () {
  calculator("+");
});

buttonMinus.addEventListener('click', function () {
  calculator("-");
});

buttonMultiply.addEventListener('click', function () {
  calculator("*")
});

buttonDivide.addEventListener('click', function () {
  calculator("/");
});

buttonExponentiation.addEventListener('click', function () {
  calculator("^");
});

buttonCompare.addEventListener('click', function () {
  let num1 = parseInt(inputNum1.value);
  let num2 = parseInt(inputNum2.value);
  let result = "";

  if (isNaN(num1) || isNaN(num2)) {
    inputResult.value = "Insert Number one & Number two";
  } else {
    if (num1 < num2) {
      result = `${num1} nho hon ${num2}`;
    } else if (num1 > num2) {
      result = `${num1} lon hon ${num2}`;
    } else {
      result = `${num1} bang ${num2}`;
    }
    inputResult.value = result;
  }
});