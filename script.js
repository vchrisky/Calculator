function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (a / b).toFixed(2);
}

// console.log(subtract(25,6));

let number1;
let operator;
let number2;

function operate(operator, number1, number2) {
    if (operator === "+") {
        return add(number1, number2);
    }else if(operator === "−"){
        return subtract(number1, number2);
    }else if(operator === "×"){
        return multiply(number1, number2);
    }else if(operator === "÷"){
        return divide(number1, number2);
    }
}


let calcCtn = document.querySelector("#calculator-container");
let calc = document.createElement("div");
calc.classList.add("calculator");
calcCtn.appendChild(calc);

let displayDiv = document.createElement("div");
let btnDiv = document.createElement("div");
displayDiv.classList.add("display-div");
btnDiv.classList.add("buttons-div");
calc.appendChild(displayDiv);
calc.appendChild(btnDiv);

let display = document.createElement('input');
display.id = 'main-input';
displayDiv.appendChild(display);
display.focus();

let num = 1;

for (let i = 0; i < 6; i++) {
    btnChildDiv = document.createElement('div');
    btnChildDiv.classList.add(`button-div-${num}`);
    btnDiv.appendChild(btnChildDiv);
    let btnNum = 1;
    if (num > 1 && num < 6) {
        for (let i = 0; i < 4; i++) {
            btn = document.createElement('button');
            btn.classList.add(`button-${btnNum}`);
            btnChildDiv.appendChild(btn);
            btnNum++;
        }
    }
    num++;
}

let btnDiv1 = document.querySelector('.button-div-1');
let undoBtn = document.createElement('button');
let clearBtn = document.createElement('button');
undoBtn.classList.add("undo-button");
clearBtn.classList.add("clear-button");
undoBtn.textContent = "Undo";
clearBtn.textContent = "Clear";
btnDiv1.appendChild(undoBtn);
btnDiv1.appendChild(clearBtn);

let digitBtn1 = document.querySelector('.button-div-2 .button-1');
digitBtn1.textContent = "1";
let digitBtn2 = document.querySelector('.button-div-2 .button-2');
digitBtn2.textContent = "2";
let digitBtn3 = document.querySelector('.button-div-2 .button-3');
digitBtn3.textContent = "3";
let digitBtn4 = document.querySelector('.button-div-3 .button-1');
digitBtn4.textContent = "4";
let digitBtn5 = document.querySelector('.button-div-3 .button-2');
digitBtn5.textContent = "5";
let digitBtn6 = document.querySelector('.button-div-3 .button-3');
digitBtn6.textContent = "6";
let digitBtn7 = document.querySelector('.button-div-4 .button-1');
digitBtn7.textContent = "7";
let digitBtn8 = document.querySelector('.button-div-4 .button-2');
digitBtn8.textContent = "8";
let digitBtn9 = document.querySelector('.button-div-4 .button-3');
digitBtn9.textContent = "9";
let digitBtn0 = document.querySelector('.button-div-5 .button-2');
digitBtn0.textContent = "0";
let pointBtn = document.querySelector('.button-div-5 .button-1');
pointBtn.textContent = ".";
let percentBtn1 = document.querySelector('.button-div-5 .button-3');
percentBtn1.textContent = "%";


let addBtn = document.querySelector('.button-div-2 .button-4');
addBtn.textContent = "+";
let subtractBtn = document.querySelector('.button-div-3 .button-4');
subtractBtn.textContent = "−";
let multiplyBtn = document.querySelector('.button-div-4 .button-4');
multiplyBtn.textContent = "×";
let divideBtn = document.querySelector('.button-div-5 .button-4');
divideBtn.textContent = "÷";

let btnDiv6 = document.querySelector('.button-div-6');
let equalsBtn = document.createElement('button');
let powerBtn = document.createElement('button');
let sqRootBtn = document.createElement('button');
equalsBtn.classList.add("equals-button");
powerBtn.classList.add("power-button");
sqRootBtn.classList.add("sq-root-button");
equalsBtn.textContent = "=";
powerBtn.textContent = "x²";
sqRootBtn.textContent = "√";
btnDiv6.appendChild(powerBtn);
btnDiv6.appendChild(sqRootBtn);
btnDiv6.appendChild(equalsBtn);


split = display.value.split(operator);
error = false;

function clearError() {
    if(error){
        error = false;
        display.value = "";
    }
}

function mathSymbol(symbol){
    clearError();
    display.value += symbol;
    if (split.length > 1) {
        display.value = `${operate(operator, +number1, +number2)}${symbol}`;
    }    
    operator = symbol;
}

addBtn.addEventListener('click', () => {
    mathSymbol("+");
})

subtractBtn.addEventListener('click', () => {
    mathSymbol("−");
})

multiplyBtn.addEventListener('click', () => {
    mathSymbol("×");
})

divideBtn.addEventListener('click', () => {
    mathSymbol("÷");
})

function displayValues(digit) {
    clearError();
    display.value += digit;
    split = display.value.split(operator);
    number1 = split[0];
    number2 = split[1];
}

digitBtn1.addEventListener('click', () => {
    displayValues(1);
})

digitBtn2.addEventListener('click', () => {
    displayValues(2);
})

digitBtn3.addEventListener('click', () => {
    displayValues(3);
})

digitBtn4.addEventListener('click', () => {
    displayValues(4);
})

digitBtn5.addEventListener('click', () => {
    displayValues(5);
})

digitBtn6.addEventListener('click', () => {
    displayValues(6);
})

digitBtn7.addEventListener('click', () => {
    displayValues(7);
})

digitBtn8.addEventListener('click', () => {
    displayValues(8);
})

digitBtn9.addEventListener('click', () => {
    displayValues(9);
})

digitBtn0.addEventListener('click', () => {
    displayValues(0);
})

clearBtn.addEventListener('click', () => {
    display.value = "";
    number1 = 0;
    number2 = 0;
})

undoBtn.addEventListener('click', () => {
    display.value = display.value.split("").slice(0, -1).join("");
})

pointBtn.addEventListener('click', () => {
    clearError();
    display.value += ".";
})

equalsBtn.addEventListener('click', () => {
    if(display.value.includes(operator && number2)){
    display.value = "";
    display.value = operate(operator, +number1, +number2);
    }else{
        error = true;
        display.value = "Please Input a valid Expression";
    }
})

powerBtn.addEventListener('click', () => {
    display.value += "²";
    if (number1 > 0) {
        display.value = Math.pow(number1, 2);   
    }
})