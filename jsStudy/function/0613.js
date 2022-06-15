//매개변수(parameter) : 함수 선언할 때
// 인수(argument) : 함수 사용할 때

// 함수는 재사용이 가능하다
// 함수를 모아놓은 곳 : 라이브러리(lib)



console.dir(window); //dir은 method 함수

let i = 0; //전역변수(전역객체에 속함) (외부변수)
let hello = 'hello?';

function showTest(a, b, c, d, e) { //함수의 선언 - 매개변수
    let hello = 'hi!'; //지역변수
    console.log(hello);
    console.log(a, b, c, d, e);
}
console.log(showTest()); //() 열면 함수 실행


while (i <= 10) {
    showTest(i, 1, 2, 3, 4); //함수 사용 - 인수
    i++;
}

console.log(hello); //error (변수의 생명 주기 - scope)



function anotherFunction() {
    return 'Bye';
}

// 반환 값이 없을 때: procedure
// 반환 값이 있을 때: function
// 함수의 return은 값을 반환하고 종료할 때 사용 (반복문의 break와 같은 기능)


function showMessage(from, text) {
    // anotherFunction()은 text값이 없을 때만 호출됨
    // anotherFunction()의 반환 값이 text의 값이 됨

    // if (text === undefined) {
    //     text = '빈 문자열';
    // }
    if (!text) {
        return; //text 값이 없을 때 함수를 종료
    }
    // text = text ?? anotherFunction();
    text = text || anotherFunction(); //3개 모두 같은 뜻

    console.log(`${from} : ${text}`);
    }

  showMessage('Ann', 'Hello');
  showMessage('Ann');



  function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return '보호자의 동의를 받으셨나요?';
    } //도달 안 함
    return false;
  }

//   let age = prompt('나이를 알려주세요' , 18);

//   if (checkAge()) {
//     alert('접속 허용');
//   } else {
//     alert('접속 차단');
//   }

  function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }
    console.log('영화 상영');
  }
  showMovie(15);

  

  function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i); // a Prime
    }
  }

  function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
  }


  function checkAge2(age2) {
    if (age2 > 18 || confirm('보호자 동의'));
     
  }

  function checkAge3(age3) {
    return (age3 > 18) ? true : confirm('보호자 동의');
  }


  function min(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
  }

  function min2(a, b) {
    return a < b ? a : b;
  }

  console.log(min2(2, 3));



const x = 1;
let n;

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(2, 2));
    
    // if (x < 1) alert('자연수를 입력하세요.');


// function sum(a, b) {
//   return a + b;
// }

let sum = (a, b) => a + b;
console.log(sum(5, 2));

let say = () => {
  let words = 'hello';
  return words;
};
say();



// let me = new object();
let you = {};

console.log(typeof me);
console.log(typeof you);



let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

const userName = {
  name : "John"
};
//works
userName.name = "Pete";
//error
// userName = 123;


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let salariesSum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(salariesSum);