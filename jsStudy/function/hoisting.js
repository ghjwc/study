
sayHi1(); //가능
// sayHi2(); //불가능

//호이스팅 가능
function sayHi1() {
    console.log('hi');
}

// 호이스팅 불가능
let sayHi2 = function() {
    console.log('hello');
}; //할당문이라서 괄호 뒤에 세미콜론 붙여야 함

sayHi2(); //가능