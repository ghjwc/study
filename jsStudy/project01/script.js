let openMenu = document.querySelector('#menu'),
    slide = document.querySelector('#aside'),
    closeMenu = document.querySelector('#aside > div');

openMenu.addEventListener('click', function() {
    if (!slide.clientWidth) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        slide.style.width = '100%';
        slide.style.opacity = '1';
        slide.style.visibility = 'visible';
    } else {
        hideMenu();
    }
});

closeMenu.addEventListener('click', function() {
    hideMenu();
});

function hideMenu() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    slide.style.width = '0';
    slide.style.opacity = '0';
    slide.style.visibility = 'hidden';
}