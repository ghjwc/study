const inputNum = document.getElementById('inputNum'),
    history = document.getElementById('history'),
    btn = document.querySelectorAll('button'),
    numBtn = document.querySelectorAll('.num'),
    oper = document.querySelectorAll('.oper'),
    result = document.querySelector('.result'),
    clear = document.querySelector('.clear');


// class Calculator {
//     constructor(inputNum) {
//         this.inputNum = inputNum;
//         this.inputNumContent = '';
//     }
// }

// const calculator = new Calculator(inputNum);

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



for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].onclick = function() {
        inputNum.value += this.innerText;
    }
}

// inputNum.addEventListener('keyup', function(e) {
//     // if(e.key.match(/[^0-9]/g)) {
//     //   e.target.value =  e.target.value.replace(/[^0-9]/g, '');
//     // }
//     //this.value = e.key;
//     if(e.key.match(/[0-9]/g)) {
//       this.value += e.key;
//     }
//   });

inputNum.addEventListener('keydown', function(e) {
    
    if (e.key >= 0 && e.key <= 9) {
        console.log('키보드-숫자');
        inputNum.value += this.innerText;
    } else {
        console.log('키보드-숫자 아님');
        // e.preventDefault();
        // return;
        let inputArr = inputNum.value;
        inputArr = [];
        inputNum.value = inputArr.splice(-1, this);
    }
});

clear.onclick = function() {
    inputNum.value = '';
}


let firstNum = parseInt(inputNum.value),
    secNum = inputNum.value;

console.log(firstNum);
console.log(secNum);

//-----

function calculate(n1, oper, n2) {
    let resultNum = 0;
    if (oper === '+') {
        resultNum = Number(n1) + Number(n2);
    } else if (oper === '-') {
        resultNum = Number(n1) - Number(n2);
    } else if (oper === '&times;') {
        resultNum = Number(n1) * Number(n2);
    } else if (oper === '&divide;') {
        resultNum = Number(n1) / Number(n2);
    }
    return String(resultNum);
}

