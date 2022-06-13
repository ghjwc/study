// let agent = navigator.userAgent.toLocaleLowerCase();
// console.dir(navigator);
// console.log(agent.indexOf("firefox"));

// switch (agent) {
//     case navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1 || (agent.indexOf("msie") != -1):
//         alert('IE입니다.');
//     case agent.indexOf("chrome") != -1:
//         alert('chrome입니다.');
//     case agent.indexOf("safari") != -1:
//         alert('safari입니다.');
//     case agent.indexOf("firefox") != -1:
//         alert('firefox입니다.');
// }


let n = parseInt(prompt('숫자를 입력하세요.' , ''));
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(sum);




let login = prompt('아이디를 입력하세요' , '');

if (login == 'Admin') {
    let pwCheck = prompt('비밀번호를 입력하세요.' , '');
    if (pwCheck == 'TheMaster') {
        alert('Welcome!')
    } else if (pwCheck == '' || pwCheck == null) {
        alert('취소했거나 공백입니다.');
    } else {
        alert('잘못된 비밀번호입니다.');
    }
} else if (login == '' || login == null) {
    alert('취소했거나 공백입니다.');
} else {
    alert('잘못된 아이디입니다.');
}