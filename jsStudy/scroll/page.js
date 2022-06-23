let scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
);
console.log(scrollHeight);

let scrollWidth = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
);


let btn = document.getElementsByTagName('li');

btn[0].onclick = function() {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
}

btn[1].onclick = function() {
    window.scrollTo({left: scrollWidth / 3, top: 0, behavior: 'smooth'});
}

btn[2].onclick = function() {
    window.scrollTo({left: scrollWidth, top: 0, behavior: 'smooth'});
}

btn[3].onclick = function() {
    window.scrollTo({left: scrollWidth, top: scrollHeight, behavior: 'smooth'});
}

btn[4].onclick = function() {
    window.scrollTo({left: scrollWidth / 3, top: scrollHeight, behavior: 'smooth'});
}

btn[5].onclick = function() {
    window.scrollTo({left: 0, top: scrollHeight, behavior: 'smooth'});
}