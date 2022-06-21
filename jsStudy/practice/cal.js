let a = {};
let b = {};
console.log(a == b); //false

function aObj() {
    // return this;
    // return a;
}

function bObj() {
    // return this;
    // return a;
}

let f = aObj();
let s = bObj();
console.log(f == s);
// new가 있으면 객체, 없으면 함수


let Calc = {
    a: 0,
    b: 0,
    read: function() {},
    sum: function() {},
    mul: function() {}
}

Calc.read();

function Calculator() {
    this.a = 0;
    this.b = 0;

    this.read = function() {
        this.a = Number(prompt('Number?'));
        this.b = +prompt('Number?');
        console.log(this.sum());
        console.log(this.mul());
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };

} //생성자 함수

let c = new Calculator(); //인스턴스

c.read();

console.log(c.sum());
console.log(c.mul());



function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        let sumValue = +prompt('Number?');
        this.value += sumValue;
    };
}

let aa = new Accumulator(1);
aa.value = 100;
aa.read();
aa.read();
aa.read();
aa.read();
aa.read();
console.log(aa.value);