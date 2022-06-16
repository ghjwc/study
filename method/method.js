let str = 'Hello';

console.log(str.toUpperCase());
console.dir(String);
console.log(str.toLowerCase());
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.dir(Boolean);


let zero = new Number(0);

console.log(zero);
zero.proper = 5;
console.log(zero.proper);
let zero2 = 0;
console.log(zero2);
zero2.proper = 7;
console.log(zero2.proper);

let arr = ['ar-SA', 'bn-BD', 'bn-IN', 'es-US', 'kp-KR'];

function a(x, arr) {
    return x.toLocaleString(arr);
}

for (let i = 0; i < arr.length; i++) {
    console.log(a(12345, arr[i]));
}


console.dir(Math);



function max() {
    let max = 0;
    let loop = arguments.length;

    for (let i = 0; i < loop; i++) {
        if (!isNaN(arguments[i])) {
            if (max < arguments[i]); {
            max = arguments[i];
            }
        }
    }

    return max;
}

let result = max(23, 4, 45, 65, 32, 43, 15);
console.log(result);




let number1 = prompt('number1?' , 0);
let number2 = prompt('number2?' , 0);

if (isFinite(number1) == false || isFinite(number2) == false) {
    alert('숫자가 아닙니다.');
} else {
    alert(+number1 + +number2);
}




function readNumber() {
    let userNumber;
    
    if (isFinite(userNumber) == true) {
        alert(userNumber);
    } else if (userNumber == '' || userNumber == null) {
        return null;
    } else {
        do {
            userNumber = parseInt(prompt('숫자를 입력하세요.' , 0));
        } while (!isFinite(userNumber));
    }
}


function ucFirst() {
    
}

