let firstNum = '',
    secondNum = '',
    operator = '';
const result = document.getElementById('inputNum'),
    numBtn = document.querySelectorAll('.num'),
    operBtn = document.querySelectorAll('.oper'),
    history = document.getElementById('history');

const clickNum = (event) => {
    if (!operator) {
        firstNum += event.target.textContent;
        result.value += event.target.textContent;
        return;
    }
    if (!secondNum) {
        result.value = '';
    }
    secondNum += event.target.textContent;
    result.value += event.target.textContent;
}

const clickOper = (op) => () => {
    if (firstNum) {
        operator = op;
    } else {
        alert('숫자를 입력해주세요.');
    }
}

for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', clickNum);
}

for (let i = 0; i < operBtn.length; i++) {
    let oper_i = ['/', '*', '-', '+'];
    operBtn[i].addEventListener('click', clickOper(oper_i[i]));
}

document.querySelector('.result').addEventListener('click', () => {
    if (secondNum) {
        switch(operator) {
            case '+' :
                result.value = parseInt(firstNum) + parseInt(secondNum);
                break;
            case '-' :
                result.value = parseInt(firstNum) - parseInt(secondNum);
                break;
            case '/' :
                result.value = parseInt(firstNum) / parseInt(secondNum);
                break;
            case '*' :
                result.value = parseInt(firstNum) * parseInt(secondNum);
                break;
            default :
                break;
        }
    } else {
        alert('숫자를 입력해주세요.');
    }
    firstNum = result.value;
    secondNum = '';
    operator = '';
});

document.querySelector('.clear').addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    operator = '';
    result.value = '';
});

//history

// let btnAll = document.querySelectorAll('button');

// for (let i = 0; i < btnAll.length; i++) {
//     btnAll.onclick = function() {
//         console.log('btnAll-onclick');
//         const history = document.getElementById('history');
//         let historyUl = document.querySelector('.historyUl'),
//             historyLi = [];
    
//         if (result.value != '') {
//             historyLi = document.createElement('li');
//             historyLi.innerText += result.value;
//             historyUl.appendChild(historyLi);
//         }
//     }
// }