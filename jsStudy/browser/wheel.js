window.addEventListener('wheel', function(e) {
    if (e.target.className != 'section') return;
    console.log(e.deltaY);
    e.preventDefault();
    document.body.scrollLeft -= e.deltaY;
}, {passive: false});