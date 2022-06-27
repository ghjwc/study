const gauge = document.querySelector('header > div:last-child'),
    gaugeTop = gauge.offsetTop;

console.log(gauge);
console.log(gaugeTop);

let secs = document.querySelectorAll('.section'),
    lis = document.querySelectorAll('.fixMenu > ul > li');


window.addEventListener('scroll', function() {
    chkReader(gauge, gaugeTop);
    let index = 0;

    lis.forEach(function(val, i) {
        val.style.background = 'transparent';
    });

    secs.forEach(function(sec, i) {
        if (sec.offsetTop <= window.scrollY && (sec.offsetTop + sec.clientHeight) >= window.scrollY) {
            lis[index].style.background = 'red';
        }
        index++;
    });
});

function chkReader() {
    if (window.pageYOffset >= gaugeTop) {
        gauge.style.position = 'fixed';
        gauge.style.top = 0;
    } else {
        gauge.style.position = '';
    }

    let color = document.querySelector('.color'),
        doc = document.documentElement,
        winScroll = document.body.scrollTop || doc.scrollTop,
        winHeight = doc.scrollHeight - doc.clientHeight,
        scrolled = (winScroll / winHeight) * 100;

    color.style.width = scrolled + '%';
}


// const bottomBtn = document.getElementById('bottom');
const topBtn = document.getElementById('top');

// bottomBtn.onclick = function() {
//     window.scrollTo({left: 0, top: document.documentElement.scrollHeight, behavior: 'smooth'});
// };

topBtn.onclick = function() {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
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
