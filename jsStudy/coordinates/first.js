let body = document.body.style;
body.height = '10000px';
body.width = '10000px';

let div = document.querySelector('body > div > div');
div.style.position = 'fixed';
div.style.top = '100px';
div.style.left = '100px';
div.style.padding = '10px';
div.style.width = 'fit-content';
div.style.height = 'fit-content';
div.style.border = '1px solid red';

// console.dir(div);
// console.dir(div.clientX);
// console.dir(div.clientY);
// console.dir(div.pageX);
// console.dir(div.pageY);
// console.dir(div.offsetTop);
// console.dir(div.offsetLeft);
// console.dir(div.offsetX);
// console.dir(div.offsetY);
// console.dir(div.screenX);
// console.dir(div.screenY);

window.addEventListener('mousemove', function(e) {
    // div.style.top = e.pageY + 'px';
    // div.style.left = e.pageX + 'px'; //absoute일 때 사용
    div.style.top = e.clientY - (div.clientHeight / 2) + 'px';
    div.style.left = e.clientX - (div.clientWidth / 2) + 'px';

    div.innerHTML = `e.pageX: ${e.pageX} <br>`;
    div.innerHTML += `e.pageY: ${e.pageY} <br>`;
    div.innerHTML += `e.clientX: ${e.clientX} <br>`;
    div.innerHTML += `e.clientY: ${e.clientY} <br>`;
    div.innerHTML += `e.screenX: ${e.screenX} <br>`;
    div.innerHTML += `e.screenY: ${e.screenY} <br>`;
    div.innerHTML += `e.offsetX: ${e.offsetX} <br>`;
    div.innerHTML += `e.offsetY: ${e.offsetY} <br>`;
});



let input = document.querySelector('input');

input.onfocus = function() {
    console.log(this.getBoundingClientRect()); //rect 객체 반환
}



let centerX = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;

let elem = document.elementFromPoint(centerX, centerY);

elem.style.background = 'lightcyan';
alert(elem.tagName);