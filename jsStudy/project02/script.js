const inputNum = document.getElementById('inputNum'),
    btn = document.querySelectorAll('button'),
    numBtn = document.querySelectorAll('.num'),
    oper = document.querySelectorAll('.oper'),
    result = document.querySelector('.result'),
    clear = document.querySelector('.clear');


class Calculator {
    constructor(inputNum) {
        this.inputNum = inputNum;
        this.inputNumContent = '';
    }
}

function appendNum(Number) {
    this.inputNumContent += Number;
}

function updateDisplay() {
    this.inputNum.value = this.inputNumContent;
}

const calculator = new Calculator(inputNum);

btn.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.className) {
            case 'oper':
                console.log('사칙연산');
                break;
            case 'clear':
                console.log('초기화');
                break;
            case 'result':
                console.log('결과');
                break;
            default:
                console.log('숫자');
                break;
        }
    });
});

// console.log(oper);
// for (let q = 0; q < oper.length; q++) {
//     oper[q].onclick = function() {
//         console.log('oper');
//     }}

for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].onclick = function() {
        inputNum.value += this.innerText;
    }
}

clear.onclick = function() {
    inputNum.value = '';
}

// result.onclick = function operResult() {
//     let resultNum = inputNum.value;
//     console.log(resultNum);
// }

let firstNum = parseInt(inputNum.value),
    secNum = inputNum.value;

console.log(firstNum);
console.log(secNum);

// for(let j = 0; j < oper.length; j++) {
//     oper[j].onclick = function() {
//         if (j == 3) {
//             console.log('clickAddition');
//             firstNum + secNum;
//             operResult();
//         } else if (j == 2) {
//             console.log('clickSubtraction');
//         } else if (j == 1) {
//             console.log('clickMultiple');
//         } else if (j == 0) {
//             console.log('clickDivide');
//         }
//     }
// }