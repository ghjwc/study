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
    .type("������", { delay: 100 })
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
    .type("��")
    // .move(-4, { delay: 150 })
    .type(" �޲ٴ�")
    // .move(null, { to: "END" })
    .type(' <span class="myName">������</span>', { delay: 400 })
    // .delete(".place", { delay: 800, instant: true })
    .type('�Դϴ�', {
        speed: 100,
    })
    .move(null, { to: "START" }, { delay: 100 })
    .type("<strong>����Ʈ����</strong> ", { delay: 500 })
    .move(null, { to: "END" })
    .type(".", { delay: 100 })
    .go();



// button
const downBtn = document.querySelector('.firstImg > img'),
        topBtn = document.querySelector('.topBtn > img'),
        bottomBtn = document.querySelector('.bottomBtn > img');
        
downBtn.addEventListener('click', () => {
    window.scrollTo({top:(headerBack.scrollHeight + document.querySelector('.first').scrollHeight), behavior:"smooth"});
});

topBtn.addEventListener('click', () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
});

bottomBtn.addEventListener('click', () => {
    window.scrollTo({top:document.body.scrollHeight, left:0, behavior:'smooth'});
});

ScrollOut({
    targets: ".title",
    threshold: 0.5,
    once: false
});

// menu click
const headerList = document.querySelectorAll('.headerList > li');
headerList.forEach((li) => {
    li.addEventListener('click', () => {
        for (let i = 0; i < secs.length; i++) {
            console.log(secs[i]);
            window.scrollTo({top:secs[i].scrollHeight});
        }
    });
});