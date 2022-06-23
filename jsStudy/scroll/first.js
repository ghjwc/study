window.onresize = function() {
    console.dir(window.innerWidth);
    console.dir(document.documentElement.clientWidth);
    console.log(window.innerWidth - document.documentElement.clientWidth);
}
onresize();


let scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
);
console.log(scrollHeight);


// 위 아래 button
let btn = document.getElementsByTagName('button');

btn[0].onclick = function() {
    window.scrollTo({left: 0, top: scrollHeight, behavior: 'smooth'});
};

btn[2].onclick = function() {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
};



window.onscroll = function() {
    // console.log(document.documentElement.scrollTop);
    console.log(`scrollY: ${window.scrollY}`);
    console.log(`pageYOffset: ${window.pageYOffset}`); //두 개 동일한 값
};
onscroll();



// target button
function viewElement(target) {
    document.querySelector(target).scrollIntoView({top:0, behavior:'smooth'});
}

btn[1].onclick = function() {
    viewElement('div');
}



// scroll 막기 (css가 더 빠름)
// document.documentElement.style.overflow = 'hidden';
// document.body.style.overflow = 'hidden';
