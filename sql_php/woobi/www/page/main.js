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
            
            if (headerBack.style.opacity == '1') {
                mobileMenu.style.opacity = '1';   
            } else if (headerBack.style.opacity == '0.5') {
                mobileMenu.style.opacity = '0.5';
            }

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
    headerBack.style.transition = '0.5s ease';
    mobileMenu.style.opacity = '0.5';
    if (window.scrollY == 0) {
        headerBack.style.opacity = '1';
        headerBack.style.transition = '0.5s ease';
        mobileMenu.style.opacity = '1';
    }

    let index = 0;

    lis.forEach((li) => {
        li.style.background = 'transparent';
        li.style.color = 'black';
    });

    secs.forEach((sec) => {
        if (sec.offsetTop <= window.scrollY && (sec.offsetTop + sec.clientHeight) >= window.scrollY) {
            lis[index].style.background = 'black';
            lis[index].style.color = 'white';
        }
        index++;
    });
});

// typeit
new TypeIt("#typeit", {
    speed: 70,
    startDelay: 900,
  })
    .type("¾È³çÇÏ¼¼¿ä? <br>", { delay: 100 })
    .type(" °³¹ßÀÚ¸¦", { delay: 100 })
    // .move(null, { to: "START", instant: true, delay: 300 })
    // .move(1, { delay: 200 })
    // .delete(1)
    // .type("T", { delay: 225 })
    .pause(200)
    // .move(2, { instant: true })
    // .pause(200)
    // .move(5, { instant: true })
    // .move(5, { delay: 200 })
    // .type("a", { delay: 350 })
    .move(null, { to: "END" })
    .type(" ²Þ²Ù´Â")
    // .move(-4, { delay: 150 })
    // .type(" ï¿½Þ²Ù´ï¿½")
    // .move(null, { to: "END" })
    .type(' <span class="myName">ÃÖÁö¿ø</span>', { delay: 400 })
    // .delete(".place", { delay: 800, instant: true })
    .type('ÀÔ´Ï´Ù', {
        speed: 100,
    })
    .move(-16, { delay: 100 })
    .type(" <strong>ÇÁ·ÐÆ®¿£µå</strong> ", { delay: 500 })
    .move(null, { to: "END" })
    .type(".", { delay: 100 })
    .go();



// button
const btn = document.querySelectorAll('.btn');

btn[0].addEventListener('click', () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
});

btn[1].addEventListener('click', () => {
    window.scrollTo({top:document.body.scrollHeight, left:0, behavior:'smooth'});
});

btn[2].addEventListener('click', () => {
    window.scrollTo({top:(headerBack.scrollHeight + document.querySelector('.first').scrollHeight), behavior:"smooth"});
});

ScrollOut({
    targets: ".title",
    threshold: 0.5,
    once: false,
    onShown(el) {
        el.classList.add("animated");
    }
});

// menu click
const headerList = document.querySelectorAll('.headerList > li');
headerList.forEach((li, index) => {
    li.addEventListener('click', () => {
            window.scrollTo({top:(secs[index].offsetTop - headerBack.scrollHeight), behavior:'smooth'});
    });
});