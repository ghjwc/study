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
    .type("안녕하세요? <br>", { delay: 100 })
    .type(" 개발자를", { delay: 100 })
    .pause(200)
    .move(null, { to: "END" })
    .type(" 꿈꾸는")
    .type(' <span class="myName">최지원</span>', { delay: 400 })
    .type('입니다', {
        speed: 100,
    })
    .move(-16, { delay: 100 })
    .type(" <strong>프론트엔드</strong> ", { delay: 500 })
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
    targets: ".title, .skillsDiv, .prjPage, .contactUl",
    threshold: 0.5,
    once: true,
    onShown(el) {
        el.classList.add("animated");
    }
});

// menu click
const headerList = document.querySelectorAll('.headerList > li'),
        navList = document.querySelectorAll('nav > ul > li');
headerList.forEach((li, index) => {
    li.addEventListener('click', () => {
        window.scrollTo({top:(secs[index].offsetTop - headerBack.scrollHeight), behavior:'smooth'});
    });
});
navList.forEach((li, index) => {
    li.addEventListener('click', () => {
        window.scrollTo({top:(secs[index].offsetTop - headerBack.scrollHeight), behavior:'smooth'});
    });
});

// mobileTop
const mobileTop = document.getElementById('mobileTop');
mobileTop.onclick = () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
}

// skills
let skillsColor = document.querySelectorAll('.skillsColor');

window.addEventListener('scroll', () => {
    if (secs[1].offsetTop - headerBack.scrollHeight) {
        skillsColor.forEach((color) => {
            color.style.transition = '3s';
        });
        skillsColor[0].style.width = '90%';
        skillsColor[1].style.width = '90%';
        skillsColor[2].style.width = '80%';
        skillsColor[3].style.width = '50%';
        skillsColor[4].style.width = '70%';
    }
});