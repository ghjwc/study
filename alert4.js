



// for (let i = 0; i <= 10; i++) {
//     if (i % 2 || i == 0) continue;
//     console.log(i);
// }

// let j = 0;
// while (j < 3) {
//     j++;
//     console.log(`number ${j}!`);
// }


const lastNumber = 100;

outer:
for (let ii = 2; ii <= lastNumber; ii++) {
    for (let jj = 2; jj < ii; jj++) {
        if (ii % jj == 0) continue outer;
    }
    console.log(ii);
}

// const lastNumber1 = 100, counter = 0;

// for (let i1 = 2; i1 <= lastNumber1; i1++) {
//     counter == 0;

//     for (let j1 = 2; j1 <= i1; j1++) {
//         if (i1 % j1 == 0) {
//             counter++
//         }
//     }
// } if (counter == 1) {
//     console.log(i1);
// }



for (let k = 2; k <= 9; k++) {
    document.body.innerHTML += `<table border='1'><tr><td>
    ${k}단`
    for (let l = 1; l <=9; l++) {
        document.body.innerHTML += `<table border='1'><tr><td> ${k}*${l}=${k*l} </td></tr></table>`
    }
    `</td></tr></table>`
}



let str = '';
str += '<table border="1">';

const divide = 3;

for (let k1 = 1; k1 < 10; k1++) {
    if (k1 % divide == 1) str += '<tr>';
    str += '<td>';
    for (let l1 = 1; l1 < 10; l1++) {
        str += k1 + '*' + l1 + '=' + k1 * l1 + '<br>';
    }
    str += '</td>';
    if (k1 % divide == 0) str += '</tr>';
}

str += '</table>';
document.body.innerHTML = str;

 


let browser = prompt('어떤 브라우저를 사용하시나요?' , '');

if (browser == 'Edge')  {
    alert('Edge를 사용하고 계시네요!');
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
} else {
    alert('현재 페이지가 괜찮아 보이기를 바랍니다!');
}


let aa = +prompt('aa?' , '');

switch (aa) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        alert('3 이상의 숫자');
        break;
}

