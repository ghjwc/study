let numberList = [],
    lottoNumber = [],
    bonus;

const btn = document.querySelectorAll('button'),
        showResult = document.querySelector('.showResult'),
        num = document.querySelectorAll('.number');

console.log(btn[0]);
console.log(btn[1]);
console.log(btn[2]);
console.log(btn[3]);

function autoMakeNumner() {
    buycnt = 0;

    while (buycnt < 1000) {
        numberList = [];
        buycnt++;

        for (let i = 1; i < 46; i++) {
            numberList.push[i];
        }
        numberList.sort(() => Math.random() - 0.5);

        let autoLottoNumber = numberList.slice(0, 6);

        autoLottoNumber.sort((a, b) => a - b);

        let sameCnt = 0;

        for (let j = 0; j < 6; j++) {
            autoLottoNumber.find((value) => {
                if (lottoNumber[j] == value) {
                    sameCnt++;
                }
            });
        }

        if (sameCnt == 3) break;
    }
}

function chkResult() {
    let customNumberList = [];
    const customNumber = document.querySelectorAll('.customNumber');
    
    for (let i = 0; i < 6; i++) {
        customNumberList.push(customNumber[i].value);
    }

    let sameCnt = 0;

    for (let j = 0; j < 6; j++) {
        customNumberList.find((value) => {
            if (numberList[j] == value) {
                sameCnt++;
            }
        });
    }

    let bonusChk = false;
    customNumberList.find((value) => {
        if (bonus == value) {
            bonusChk = true;
        }
    });

    switch (sameCnt) {
        case '3':
            showResult.innerText = '5등';
            break;
        case '4':
            showResult.innerText = '4등';
            break;
        case '5':
            if (bonusChk) {
                showResult.innerText = '2등';
            } else {
                showResult.innerText = '3등';
            }
            break;
        case '6':
            showResult.innerText = '1등';
            break;
        default:
            showResult.innerText = '꽝';
            break;
    }
}

function makeNumber2() {
    numberList2 = [];

    for (let i = 0; i < 7; i++) {
        let number2 = Math.floor(Math.random() * 44) + 1;

        for (let j in numberList2) {
            while (true) {
                if (numberList2[j] == number2) {
                    number2 = Math.floor(Math.random() * 44) + 1;
                } else {
                    break;
                }
            }
        }
        numberList2.push(number2);
    }
    let bonus = numberList2.pop();
    numberList2.sort((a, b) => a - b);

    for (let k = 0; k < 7; k++) {
        if (k == 6) {
            num[k].innerText = bonus;
        } else {
            num[k].innerText = numberList2[k];
        }

        if (num[k].innerText < 10) {
            num[k].style.backgroundColor = 'lightpink';
        } else if (num[k].innerText < 20) {
            num[k].style.backgroundColor = 'lightskyblue';
        } else if (num[k].innerText < 30) {
            num[k].style.backgroundColor = 'tomato';
        } else if (num[k].innerText < 40) {
            num[k].style.backgroundColor = 'plum';
        } else {
            num[k].style.backgroundColor = 'lightseagreen';
        }
    }
}

function makeNumber() {
    numberList = [];

    for (i = 0; i < 46; i++) {
        numberList.push(i);
    }

    numberList.sort(() => Math.random() - 0.5);

    lottoNumber = numberList.slice(0, 7);

    bonus = lottoNumber.pop();

    lottoNumber.sort((a, b) => a - b);

    for (j = 0; j < 7; j++) {
        if (j == 6) {
            num[j].innerText = bonus;
        } else {
            num[j].innerText = numberList[j];
        }

        if (num[j].innerText < 10) {
            num[j].style.backgroundColor = 'lightpink';
        } else if (num[j].innerText < 20) {
            num[j].style.backgroundColor = 'lightskyblue';
        } else if (num[j].innerText < 30) {
            num[j].style.backgroundColor = 'tomato';
        } else if (num[j].innerText < 40) {
            num[j].style.backgroundColor = 'plum';
        } else {
            num[j].style.backgroundColor = 'lightseagreen';
        }
    }
}

btn[0].addEventListener('click', makeNumber);
btn[1].addEventListener('click', makeNumber2);

btn[2].addEventListener('click', autoMakeNumner);
btn[3].addEventListener('click', chkResult);