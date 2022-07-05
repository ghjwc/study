let inputNum = document.getElementById('inputNum'),
    inputValue = inputNum.value,
    numBtn = document.querySelectorAll('.num'),
    oper = document.querySelectorAll('.oper'),
    clear = document.querySelector('.clear'),
    resultNum = 0;

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

function result() {
    inputNum.value = resultNum;
}


for(let j = 0; j < oper.length; j++) {
    oper[j].onclick = function() {
        if (j == 3) {
            console.log('additionClick');
            resultNum = inputNum.value + inputNum.value;
            console.log(resultNum);
        } else if (j == 2) {
            console.log('subtractionClick');
        } else if (j == 1) {
            console.log('multipleClick');
        } else if (j == 0) {
            console.log('divideClick');
        }
    }
}