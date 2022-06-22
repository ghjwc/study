let main = document.getElementsByClassName('main');
// main[0].style.backgroundColor = 'red';

console.dir(document.body.classList); //main page
// console.log(document.body.setAttribute('class'));
// document.body.style.marginTop = '100px';
console.dir(document.body.style.marginTop);

let comBodyStyle = getComputedStyle(document.body);
console.log(comBodyStyle.marginTop);
document.body.style.marginTop = comBodyStyle.marginTop;
console.dir(parseInt(document.body.style.marginTop)); //parseInt 사용 시 100px에서 px 빼고 숫자만 출력


let bodyStyle = {
    backgroundColor: 'red',
    marginTop: '100px'
} //css style 객체

Object.assign(document.body.style, bodyStyle);

let color = document.body.style.setProperty('background-color', 'lightgreen', 'important');

setInterval(function() {
    document.body.style.setProperty('background-color', 'lightyellow', 'important');
}, 1000);




function getScrollBarWidth () {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";
  
    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild (inner);
  
    document.body.appendChild (outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;
  
    document.body.removeChild (outer);
  
    return (w1 - w2);
}

  console.log(getScrollBarWidth());


  console.log(example.offsetParent.id);
  console.log(example.offsetLeft);
  console.log(example.offsetTop);