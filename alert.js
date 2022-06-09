// alert('"자바스크립트!"')

let arr = [1, 2];

console.log([1,2]);
// arr.forEach(alert);
console.log('test');


const onject = {
    a: 'test',
    test: 12
};

// 즉시 실행 함수
// (함수)();
// 실행 영역

(function() {
    var i = 100;
    console.log(i);
})();

(function() {
    var i =2000;
    console.log(i);
})();

[1, 3].forEach(function() {});

// var : 재선언 가능, 함수 범위의 생명력(scope)
// let : 재선언 불가, 값을 바꿀 수 있음(재할당 가능)
// const : 재선언 불가, 값을 바꿀 수 없음(재할당 불가, 상수)
// let, const는 블록 범위 생명력

var myVar = 10;
{
    console.log(myVar);
    var inBlock = 20;
    let inA = 30;
}
// console.log(inBlock); //사용 가능
// console.log(inA); //사용 불가

function a() {
    console.log(myVar);
    var myVar = 20;

}

let test; //선언문 - 선언만 했을 땐 undefined 값 출력
console.log(test); //->undefined
test = 'test'; //할당문(대입)
let your = 'your'; //초기화

let backgroundColor; //변수(두 번째 단어에 대문자)
let BackgroundColor; //객체(첫 글자부터 대문자)
//카멜 표기
let strBackgroundColor; //string인 변수
let intBackgroundColor; //number인 변수
//헝가리언 표기

const MAX = 1024; //상수는 대문자로

const ARR = [1, 2, 3];
console.log(ARR);
ARR[0] = 7;
console.log(ARR);

// ARR = [3, 2, 1]; //불가능
// console.log(ARR);


let admin;
let name;
name = 'John';
admin = name;
// alert(admin);

let ourPlanetName;
let currentUserName;

console.log(1/0); //-> infinity
console.log(-1/0); //-> -infinity
console.log(typeof 0); //-> number
console.log(typeof 1/0); //-> NaN(Not A Number)

let numTest = 1 / 0;
console.log(typeof numTest); //->number

const bigInt = 12n;
const int = 12;
console.log(typeof bigInt == typeof int); //->false
console.log(bigInt === int); //->false

let str = "hello";
let str2 = 'single quotes are ok too';
// let phrase = `can embed another ${string}`;

let userName = "John";
console.log(`Hello, ${userName}!`);

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(false);
// 이것들은 전부 false, 나머지는 전부 true

let age;
if (age === undefined) {
    console.log('age 값을 할당해주세요.');
}

console.dir(Number);
console.dir(console);

console.log(typeof undefined); //->undefined
console.log(typeof 0); //->number
console.log(typeof 10n); //->bigInt
console.log(typeof true); //->boolean
console.log(typeof "foo"); //->string
console.log(typeof Symbol("id")); //->symbol
console.log(typeof Math); //->object
console.log(typeof null); //->object
console.log(typeof alert); //->function

// var isGone = confirm('계속 실행하시겠습니까?');

// if(isGone) {
//     console.log('실행');
// } else {
//     console.log('멈춤');
// }

// + : 자동 형변환 없음
// - , * , / : 암시적 형변환

let aaa = '10';
let bbb = 20; 
console.log(aaa + bbb); // -> 1020
// 형변환 하려면 parseInt(aaa)
console.log(parseInt(aaa) + bbb);
console.log(aaa - bbb);
console.log(aaa * bbb);
console.log(aaa / bbb);

let a1 = 1, b1 = 1;
let c1 = ++a1; //2
let d1 = b1++; //1

let a2 = 2;
let x = 1 + (a2 *= 2); //5

// "" + 1 + 0 // 10
// "" - 1 + 0 // -1
// true + false //1
// 6 / "3" //2
// "2" * "3" // 6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 //$45
// "4" - 2 //2
// "4px" - 2 //NaN
// 7 / 0 // infinity
// "  -9  " + 5 //-4
// "  -9  " - 5 // -14
// null + 1 // null
// undefined + 1 //undefined
// " \t \n" - 2 // ??

console.log( 2 > 1 );
console.log( 2 == 1 );
console.log( 2 != 1 );

console.log("0" == 0); //true -> 값만 비교(형변환)
console.log("0" === 0); //false -> 값, 타입 비교
console.log("0" != 0); //false
console.log("0" !== 0); //true 

console.log(typeof null); //object
console.log(typeof undefined); //undefined

// if (조건1) {
//     조건1이 참일 경우
// } else if (조건2) {
//     조건2가 참일 경우
// } else if (조건3) {
//     조건3이 참일 경우
// } else if (조건4) {
//     조건4가 참일 경우
// } else if (조건5) {
//     조건5가 참일 경우
// } else {
//     모든 조건이 거짓일 경우
// }

// let age1 = prompt('나이를 입력해주세요.' , 18);
// let message = (age1 < 3)? '아기야 안녕?' :
// (age1 < 18)? '안녕!' :
// (age1 < 100)? '환영합니다!' :
// '나이가 아주 많으시거나, 나이가 아닌 값을 입력하셨군요!';
// alert(message);

// if (age1 < 3) {
//     message = '아가야 안녕?'
// } else if (age1 < 18) {
//     message = '안녕!'
// } else if (age1 < 100) {
//     message = '환영합니다!'
// } else {
//     message = '나이가 아주 많으시거나, 나이가 아닌 값을 입력하셨군요!'
// }
// alert(message);

// let question = prompt("What's the “official” name of JavaScript?");
// let msg = (question == "ECMAScript")? "정답입니다!" : "You don't know? “ECMAScript”!";
// alert(msg);

// let userNumber = prompt('숫자를 입력해주세요.');
// let printNumber = (userNumber < 0) ? -1 : 
// (userNumber == 0)  ? 0 : 1;
// alert(printNumber);

let result;
result = (aa + bb < 4) ? '미만' : '이상' ;