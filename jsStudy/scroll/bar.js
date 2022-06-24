const gauge = document.querySelector('header > div:last-child'),
    gaugeTop = gauge.offsetTop,
    gaugeBottom = gauge.offsetHeight;

console.log(gauge);
console.log(gaugeTop);
console.log(gaugeBottom);

window.addEventListener('scroll', function() {

    if (window.pageYOffset >= gaugeTop) {
        gauge.style.position = 'fixed';
        gauge.style.top = 0;
    } else {
        gauge.style.position = '';
    }

    let color = document.querySelector('.color');

    console.log(document.documentElement.clientHeight);

    let doc = document.documentElement;
    let winScroll = document.body.scrollTop || doc.scrollTop,
        winHeight = doc.scrollHeight - doc.clientHeight,
        scrolled = (winScroll / winHeight) * 100;
    color.style.width = scrolled + '%';
});



const topBtn = document.querySelector('#top');
const bottomBtn = document.querySelector('#bottom');

topBtn.onclick = function() {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
};

bottomBtn.onclick = function() {
    window.scrollTo({left: 0, top: document.documentElement.scrollHeight, behavior: 'smooth'});
};


// window.addEventListener('load', function() {
//     // console.log(document.querySelector('header > div:last-child').offsetTop);
//     let progress = document.querySelector('header > div:last-child');
//     let progressTop = progress.offsetTop;

//     window.addEventListener('scroll', function() {
    
//         let windowTop = window.scrollY;
//         let html = document.documentElement;
//         let docHeight = html.scrollHeight;
//         let docViewHeight = html.clientHeight;
//         let totalHeight = docHeight - docViewHeight;
//         progress.style.width = windowTop / totalHeight * 100 + '%';

//         // console.log(progressTop);
//         // console.log(window.scrollY); //(=pageYOffset)

//         if (progressTop <= windowTop) {
//             progress.style.cssText = 'position: fixed; top: 0'
//         } else {
//             progress.style.cssText = 'position: static; top: 0'
//         }
//     });
// });