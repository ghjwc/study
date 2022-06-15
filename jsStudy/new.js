let user = {
    name: "보라",
    isAdmin: false
};

function User(name) {
    this.name = name;
    this.isAdmin = false;
    this.say = function() {
        alert(this.name + 'hi!');
    }
}
let me = new User('홍길동'); //생성자 함수 방식
let you = new User('고길동');
let our = new User('장길동');

console.dir(me.say());
console.dir(you);
console.dir(our);




let obj = {};

function A() {return obj;}
function B() {return obj;}

alert( new A() == new B() ); //true 반환


user = {
    sayHi: function() {
        alert('Hello');
    }
};

user = {
    sayHi() {
        alert('Hello');
    }
};

let users = {
    name: 'Jhon',
    age: 30,

    sayHi() {
        alert(this.name);
    }
};
user.sayHi();