let mo = document.querySelector('#mo');
let moSpan = document.querySelector('#mo > span');
let moDiv = document.querySelector('#mo > div');
let moDivSpan = document.querySelector('#mo > div > span');
let intMo = intMoSpan = 0;

moSpan.innerText = intMo;
moDivSpan.innerText = intMoSpan;

mo.onmouseover = function() {
    intMo++;
    moSpan.innerText = intMo;
}

moDiv.onmouseover = function() {
    intMoSpan++;
    moDivSpan.innerText = intMoSpan;
}

let me = document.querySelector('#me');
let meSpan = document.querySelector('#me > span');
let meDiv = document.querySelector('#me > div');
let meDivSpan = document.querySelector('#me > div > span');

let intMe = intMeSpan = 0;

meSpan.innerText = intMe;
meDivSpan.innerText = intMeSpan;

me.onmouseenter = function() {
    intMe++;
    meSpan.innerText = intMe;
}

meDiv.onmouseenter = function() {
    intMeSpan++;
    meDivSpan.innerText = intMeSpan;
}