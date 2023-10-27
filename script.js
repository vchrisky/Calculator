function roundOff2(num) {
  return Math.round(num * 100) / 100;
}

function add(a, b) {
  return roundOff2(a + b);
}

function subtract(a, b) {
  return roundOff2(a - b);
}

function multiply(a, b) {
  return roundOff2(a * b);
}

function divide(a, b) {
  return roundOff2(a / b);
}

let operator;
let number1;
let number2;

function operate(operator, number1, number2) {
  if (operator === "+") {
    return add(number1, number2);
  } else if (operator === "−" || operator === "-") {
    return subtract(number1, number2);
  } else if (operator === "×") {
    return multiply(number1, number2);
  } else if (operator === "÷") {
    if (number2 == 0) {
      return "To Infinity... and Beyond!";
    } else {
      return divide(number1, number2);
    }
  }
}

let calcCtn = document.querySelector("#calculator-container");
let calc = document.createElement("div");
calc.classList.add("calculator");
calcCtn.appendChild(calc);

let displayDiv = document.createElement("div");
let btnDiv = document.createElement("div");
displayDiv.classList.add("display1-div");
btnDiv.classList.add("buttons-div");
calc.appendChild(displayDiv);
calc.appendChild(btnDiv);

let display1 = document.createElement("input");
let display2 = document.createElement("span");
display1.id = "main-input";
display2.id = "secondary-display";
displayDiv.appendChild(display2);
displayDiv.appendChild(display1);
display1.focus();

let num = 1;

for (let i = 0; i < 6; i++) {
  btnChildDiv = document.createElement("div");
  btnChildDiv.classList.add(`button-div-${num}`);
  btnDiv.appendChild(btnChildDiv);
  let btnNum = 1;
  if (num > 1 && num < 6) {
    for (let i = 0; i < 4; i++) {
      btn = document.createElement("button");
      btn.classList.add(`button-${btnNum}`);
      btnChildDiv.appendChild(btn);
      btnNum++;
    }
  }
  num++;
}

let btnDiv1 = document.querySelector(".button-div-1");
let undoBtn = document.createElement("button");
let clearBtn = document.createElement("button");
undoBtn.classList.add("undo-button");
clearBtn.classList.add("clear-button");
undoBtn.textContent = "Undo";
clearBtn.textContent = "Clear";
btnDiv1.appendChild(undoBtn);
btnDiv1.appendChild(clearBtn);

let digitBtn1 = document.querySelector(".button-div-2 .button-1");
digitBtn1.textContent = "1";
let digitBtn2 = document.querySelector(".button-div-2 .button-2");
digitBtn2.textContent = "2";
let digitBtn3 = document.querySelector(".button-div-2 .button-3");
digitBtn3.textContent = "3";
let digitBtn4 = document.querySelector(".button-div-3 .button-1");
digitBtn4.textContent = "4";
let digitBtn5 = document.querySelector(".button-div-3 .button-2");
digitBtn5.textContent = "5";
let digitBtn6 = document.querySelector(".button-div-3 .button-3");
digitBtn6.textContent = "6";
let digitBtn7 = document.querySelector(".button-div-4 .button-1");
digitBtn7.textContent = "7";
let digitBtn8 = document.querySelector(".button-div-4 .button-2");
digitBtn8.textContent = "8";
let digitBtn9 = document.querySelector(".button-div-4 .button-3");
digitBtn9.textContent = "9";
let digitBtn0 = document.querySelector(".button-div-5 .button-2");
digitBtn0.textContent = "0";
let pointBtn = document.querySelector(".button-div-5 .button-1");
pointBtn.textContent = ".";
let percentBtn = document.querySelector(".button-div-5 .button-3");
percentBtn.textContent = "%";

let addBtn = document.querySelector(".button-div-2 .button-4");
addBtn.textContent = "+";
let subtractBtn = document.querySelector(".button-div-3 .button-4");
subtractBtn.textContent = "−";
let multiplyBtn = document.querySelector(".button-div-4 .button-4");
multiplyBtn.textContent = "×";
let divideBtn = document.querySelector(".button-div-5 .button-4");
divideBtn.textContent = "÷";

let btnDiv6 = document.querySelector(".button-div-6");
let equalsBtn = document.createElement("button");
let powerBtn = document.createElement("button");
let sqRootBtn = document.createElement("button");
equalsBtn.classList.add("equals-button");
powerBtn.classList.add("power-button");
sqRootBtn.classList.add("sq-root-button");
equalsBtn.textContent = "=";
powerBtn.textContent = "x²";
sqRootBtn.textContent = "√";
btnDiv6.appendChild(powerBtn);
btnDiv6.appendChild(sqRootBtn);
btnDiv6.appendChild(equalsBtn);

function splitExp(string) {
  sqRootBtn.textContent = "√";
  const regex = /([−|+|-]?\d+(\.\d+)?)([-−+×÷])([−|+|-|√]?\d+(\.\d+)?)/;
  let matches = string.split(regex);
  let [, num1, , symbol, num2] = matches;
  if (matches.length > 1 && matches[0] !== "") {
    console.log("error");
  } else if (matches.length == 1) {
    return matches;
  } else {
    return [num1.replace("−", "-"), symbol, num2.replace("−", "-")];
  }
}

error = false;

function clearError() {
  if (error) {
    error = false;
    display1.value = "";
  }
}

function mathSymbol(symbol) {
  clearError();
  split = splitExp(display1.value);
  display1.value += symbol;
  display2.textContent += symbol;
  if (display1.value.includes("√")) {
    if (split.length > 1) {
      split1 = display1.value.split(/[−|+|-|×|÷|√]/);
      splitOne = split[2].split("√");
      number2 = Math.sqrt(splitOne[1]);
      display1.value =
        roundOff2(operate(operator, +number1, +number2)) + symbol;
      if (split1[1]) {
        number2 = split1[1] * Math.sqrt(split1[2]);
        display1.value =
          roundOff2(operate(operator, +number1, +number2)) + symbol;
      }
    } else if (split.length === 1) {
      splitOne = split[0].split("√");
      display1.value = `${roundOff2(Math.sqrt(splitOne[1]))}${symbol}`;
      if (splitOne[0]) {
        display1.value =
          roundOff2(splitOne[0] * Math.sqrt(splitOne[1])) + symbol;
      }
    }
  } else {
    if (split.length > 1) {
      display1.value = `${operate(operator, +number1, +number2)}${symbol}`;
    }
  }
  split = splitExp(display1.value);
  number1 = split[0];
  number2 = split[2];
  operator = symbol;
}

addBtn.addEventListener("click", () => {
  mathSymbol("+");
});

subtractBtn.addEventListener("click", () => {
  mathSymbol("−");
});

multiplyBtn.addEventListener("click", () => {
  mathSymbol("×");
});

divideBtn.addEventListener("click", () => {
  mathSymbol("÷");
});

function displayValues(digit) {
  clearError();
  display1.value += digit;
  display2.textContent += digit;
  split = splitExp(display1.value);
  if (split) {
    number1 = split[0];
    // operator = split[1];
    number2 = split[2];
  }
}

digitBtn1.addEventListener("click", () => {
  displayValues(1);
});

digitBtn2.addEventListener("click", () => {
  displayValues(2);
});

digitBtn3.addEventListener("click", () => {
  displayValues(3);
});

digitBtn4.addEventListener("click", () => {
  displayValues(4);
});

digitBtn5.addEventListener("click", () => {
  displayValues(5);
});

digitBtn6.addEventListener("click", () => {
  displayValues(6);
});

digitBtn7.addEventListener("click", () => {
  displayValues(7);
});

digitBtn8.addEventListener("click", () => {
  displayValues(8);
});

digitBtn9.addEventListener("click", () => {
  displayValues(9);
});

digitBtn0.addEventListener("click", () => {
  displayValues(0);
});

clearBtn.addEventListener("click", () => {
  display1.value = "";
  display2.textContent = "";
  number1 = "";
  number2 = "";
});

undoBtn.addEventListener("click", () => {
  display1.value = display1.value.split("").slice(0, -1).join("");
  split = display1.value.split(operator);
  display2.textContent = display2.textContent.split("").slice(0, -1).join("");
  if (display1.value == "") {
    display2.textContent = "";
  }
});

pointBtn.addEventListener("click", () => {
  clearError();
  if (number1 && !number1.includes(".")) {
    display1.value += ".";
    display2.textContent += ".";
  } else if (number2 && !number2.includes(".")) {
    display1.value += ".";
    display2.textContent += ".";
  }
});

equalsBtn.addEventListener("click", () => {
  clearError();
  console.log(split);
  if (display1.value.includes("√")) {
    if (split.length > 1) {
      split1 = display1.value.split(/[−|+|-|×|÷|√]/);
      splitOne = split[2].split("√");
      number2 = Math.sqrt(splitOne[1]);
      display1.value = roundOff2(operate(operator, +number1, +number2));
      if (split1[1]) {
        number2 = split1[1] * Math.sqrt(split1[2]);
        display1.value = roundOff2(operate(operator, +number1, +number2));
      }
    } else if (split.length === 1) {
      splitOne = split[0].split("√");
      display1.value = `${roundOff2(Math.sqrt(splitOne[1]))}`;
      if (splitOne[0]) {
        display1.value = roundOff2(splitOne[0] * Math.sqrt(splitOne[1]));
      }
    }
  } else {
    if (number1 && number2 && split.length > 1) {
      display1.value = display2.textContent = operate(
        operator,
        +number1,
        +number2
      );
      split = splitExp(display1.value);
      number1 = split[0];
      number2 = split[2];
    } else {
      error = true;
      display1.value = "Please Input a Valid Expression";
      display2.textContent = "";
      number1 = number1.replace("−", "-");
      if (+number1) {
        error = false;
        display1.value = display2.textContent = number1;
      }
    }
  }
});

percentBtn.addEventListener("click", () => {
  clearError();
  display2.textContent += "%";
  if (number1 && number2) {
    number2 = `${number2 / 100}`;
    display1.value = number1 + operator + number2;
  } else if (+number1) {
    display1.value = `${number1 / 100}`;
  }
  split = splitExp(display1.value);
  number1 = split[0];
  number2 = split[2];
});

powerBtn.addEventListener("click", () => {
  clearError();
  display2.textContent += "²";
  if (number1 && number2) {
    number2 = `${number2 * number2}`;
    display1.value = number1 + operator + number2;
  } else if (+number1) {
    display1.value = `${number1 * number1}`;
  }
  split = splitExp(display1.value);
  number1 = split[0];
  number2 = split[2];
});

sqRootBtn.addEventListener("click", () => {
  clearError();
  display1.value += "√";
  display2.textContent += "√";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "1") {
    e.preventDefault();
    digitBtn1.click();
  } else if (e.key === "2") {
    e.preventDefault();
    digitBtn2.click();
  } else if (e.key === "3") {
    e.preventDefault();
    digitBtn3.click();
  } else if (e.key === "4") {
    e.preventDefault();
    digitBtn4.click();
  } else if (e.key === "5") {
    e.preventDefault();
    digitBtn5.click();
  } else if (e.key === "6") {
    e.preventDefault();
    digitBtn6.click();
  } else if (e.key === "7") {
    e.preventDefault();
    digitBtn7.click();
  } else if (e.key === "8") {
    e.preventDefault();
    digitBtn8.click();
  } else if (e.key === "9") {
    e.preventDefault();
    digitBtn9.click();
  } else if (e.key === "0") {
    e.preventDefault();
    digitBtn0.click();
  } else if (e.key === "+") {
    e.preventDefault();
    addBtn.click();
  } else if (e.key === "-") {
    e.preventDefault();
    subtractBtn.click();
  } else if (e.key === "*") {
    e.preventDefault();
    multiplyBtn.click();
  } else if (e.key === "/") {
    e.preventDefault();
    divideBtn.click();
  } else if (e.key === ".") {
    e.preventDefault();
    pointBtn.click();
  } else if (e.key === "%") {
    e.preventDefault();
    percentBtn.click();
  } else if (e.key === "Backspace") {
    e.preventDefault();
    undoBtn.click();
  } else if (e.key === "Enter") {
    e.preventDefault();
    equalsBtn.click();
  } else if (e.key === "Delete") {
    e.preventDefault();
    clearBtn.click();
  }
});
