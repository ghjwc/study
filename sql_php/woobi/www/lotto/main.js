let numberList = [],
    lottoNumber = [],
    bonus;

const btn = document.querySelectorAll('button'),
        showResult = document.getElementById('showResult'),
        num = document.querySelectorAll('.number'),
        today = document.querySelector('#container > p:first-child');

let todayDate = new Date(),
    year = todayDate.getFullYear(),
    month = todayDate.getMonth() + 1,
    date = todayDate.getDate();

today.innerHTML = `${year}≥‚ ${month}ø˘ ${date}¿œ`;

today.valueAsDate = new Date;

function autoMakeNumber() {

    buycnt = 0;
        
    while (buycnt < 1000) {

        numberList = [];
        buycnt++;

        for (let i = 1; i < 46; i++) {
            numberList.push(i);
        }

        numberList.sort(() => Math.random() - 0.5);

        let autoLottoNumber = numberList.slice(0,6);

        autoLottoNumber.sort((a,b) => a-b);

        let sameCnt = 0;

        console.log("==============");
        console.log(autoLottoNumber);   
        console.log(lottoNumber); //
        console.log("==============");

        for (let j = 0; j < 6; j++) {
            autoLottoNumber.find(function (value) {
                if (lottoNumber[j] == value) {
                    sameCnt++;
                }
            });
        }
        if (sameCnt == 3) {
            break;
        }
    }
    console.log(1000 * buycnt);
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

    if (sameCnt == 3) {            
        showResult.innerHTML = "<span class='resultColor'>5µÓ</span> ¥Á√∑!";
    } else if (sameCnt == 4) {            
        showResult.innerHTML = "<span class='resultColor'>4µÓ</span> ¥Á√∑!";
    } else if (sameCnt == 5) {
        if (bonusChk) {                
            showResult.innerHTML = "<span class='resultColor'>2µÓ</span> ¥Á√∑!";
        } else {                
            showResult.innerHTML = "<span class='resultColor'>3µÓ</span> ¥Á√∑!";
        }            
    }
    else if (sameCnt == 6) {            
        showResult.innerHTML = "<span class='resultColor'>1µÓ</span> ¥Á√∑!";
    } else {
        showResult.innerHTML = "<span class='resultColor'>≤Œ!!</span> ¥Ÿ¿Ω ±‚»∏ø°~";
    }
}

function makeNumber2() {
    let numberList2 = [];

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
            num[k].style.backgroundColor = 'orange';
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
            num[j].style.backgroundColor = 'orange';
        } else if (num[j].innerText < 40) {
            num[j].style.backgroundColor = 'plum';
        } else {
            num[j].style.backgroundColor = 'lightseagreen';
        }
    }
}

btn[0].addEventListener('click', makeNumber);
btn[1].addEventListener('click', chkResult);