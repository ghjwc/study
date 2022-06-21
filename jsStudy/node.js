// console.dir(document);
// console.log(document.getElementsByTagName('html')[0]);

for (let el of document.documentElement.childNodes[0].childNodes) {
    console.log(`${el} : ${el.nodeType} : ${el.nodeName}`);
}

// querySelectorAll 배열
// getElementsByTagName 배열

let name = prompt('이름을 알려주세요.' , '<b>이보라</b>');

elem1.innerHTML = name;
elem2.innerText = name;
elem3.textContent = name;

setTimeout(() => elem1.innerHTML = '', 1000);
setTimeout(() => elem2.innerText = '', 2000);
setTimeout(() => elem3.textContent = '', 3000);

elem4.hidden = false;

setInterval(() => elem4.hidden = !elem4.hidden, 500);

let myDiv = document.querySelector('myDiv');

// myDiv.say = function() {
//     console.log('hi');
// }

// console.log(myDiv);
// console.log(myDiv.id);
// console.log(myDiv.dataset.value);
// console.log(myDiv.style.color);
// myDiv.say();

// myDiv.onclick = function() {
//     myDiv.say();
// }

// myDiv.setAttribute('some', '5');
// console.log(myDiv.getAttribute('some'));

let input = document.querySelector('input');

input.setAttribute('id', 'id');
console.log(input.id);

setTimeout(function() {
    input.id = 'newId';
}, 2000);

console.log(input.getAttribute('checked'));
console.log(input.checked);
