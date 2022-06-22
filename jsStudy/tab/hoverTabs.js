let mo = document.getElementById('mo');
mo.style.height = '50px';
mo.children[0].style.height = '50px';
mo.children[0].style.background = 'red';
// mouseover, mouseout
// mouseenter, mouseleave

let intMo = 0, intInMo = 0;

mo.onmouseover = function() {
    // console.log(this.children[0]);
    intMo++;
    mo.innerText += intMo;
}

mo.children[0].onmouseover = function() {
    intInMo++;
    mo.children[0].innerText = intInMo;
}

mo.onmouseout = function() {
    this.children[0].style.height = '0';
    this.children[0].style.background = '';
}

// console.dir(mo);

let me = document.getElementById('me');
mo.style.height = '50px';
// mouseover, mouseout
// mouseenter, mouseleave

mo.onmouseenter = function() {
    // console.log(this.children[0]);
    this.children[0].style.height = '50px';
    this.children[0].style.background = 'red';
}

mo.onmouseleave = function() {
    this.children[0].style.height = '0';
    this.children[0].style.background = '';
}