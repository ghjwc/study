let openMenu = document.querySelector('#menu'),
    slide = document.querySelector('#aside'),
    closeMenu = document.querySelector('#aside > div');

openMenu.addEventListener('click', function() {
    console.log(window.innerWidth);
    console.log(document.body.offsetWidth < 650);

    if (!slide.clientWidth) {
        seeMenu();

        if (document.body.offsetWidth <= 1040) {
            slide.style.width = '100%';
            slide.style.top = 0;
        } else {
            slide.style.width = '60%';
        }        
    }  else {
        hideMenu();
    }
});

closeMenu.addEventListener('click', function() {
    hideMenu();
});

function seeMenu() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    slide.style.opacity = '1';
    slide.style.visibility = 'visible';
}

function hideMenu() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    slide.style.width = '0';
    slide.style.opacity = '0';
    slide.style.visibility = 'hidden';
}
