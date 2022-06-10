



for (let i = 0; i <= 10; i++) {
    if (i % 2 || i == 0) continue;
    console.log(i);
}

let j = 0;
while (j < 3) {
    j++;
    console.log(`number ${j}!`);
}


const lastNumber = 100;

outer:
for (let ii = 2; ii <= lastNumber; ii++) {
    for (let jj = 2; jj < ii; jj++) {
        if (ii % jj == 0) continue outer;
    }
    console.log(ii);
}



for (let k = 2; k <= 9; k++) {
    document.body.innerHTML += `<table border='1'><tr><td>
    ${k}단`
    for (let l = 1; l <=9; l++) {
        document.body.innerHTML += `<table border='1'><tr><td> ${k}*${l}=${k*l} </td></tr></table>`
    }
    `</td></tr></table>`
}



 
// let numberBox;
// for (; numberBox > 100; numberBox++) {
//     numberBox = prompt("100보다 큰 숫자를 입력하세요." , "");
//     if ()
// }