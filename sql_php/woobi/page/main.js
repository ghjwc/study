// hambugger && mobileMenu
const hambugger = document.getElementById('hambugger'),
        mobileMenu = document.querySelector('.headerList'),
        nav = document.querySelector('nav');

if (hambugger) {
    hambugger.addEventListener('click', () => {
        document.body.classList.toggle('active');
        hambugger.classList.toggle('active');
    
        if (!mobileMenu.clientHeight) {
            mobileMenu.style.minHeight = 'calc(100vh - 6rem)';
            mobileMenu.style.opacity = '1';
            mobileMenu.style.visibility = 'visible';
            mobileMenu.style.transition = '0.5s ease';
        } else {
            mobileMenu.style.minHeight = '0';
            mobileMenu.style.opacity = '0';
            mobileMenu.style.visibility = 'hidden';
            mobileMenu.style.transition = '0.5s ease';
        }
        
    });
}

// nav
let secs = document.querySelectorAll('.section'),
    lis = document.querySelectorAll('nav > ul > li'),
    headerBack = document.querySelector('.headerBack');

window.addEventListener('scroll', () => {
    headerBack.style.opacity = '0.5';
    if (window.scrollY == 0) {
        headerBack.style.opacity = '1';
    }

    let index = 0;

    lis.forEach((li) => {
        li.style.background = 'transparent';
    });

    secs.forEach((sec) => {
        if (sec.offsetTop <= window.scrollY && (sec.offsetTop + sec.clientHeight) >= window.scrollY) {
            lis[index].style.background = 'red';
        }
        index++;
    });
});

// top
const topBtn = document.getElementById('topBtn');
topBtn.addEventListener('click', () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
});
    