
window.addEventListener('load', function() {

    const progress = document.querySelector('.bottom'),
        progressTop = progress.offsetTop;

    console.log(progress);
    console.log(progressTop);

    window.addEventListener('scroll', function() {
        
        if (window.pageYOffset >= progressTop) {
            progress.style.position = 'fixed';
            progress.style.top = 0;
        } else {
            progress.style.position = '';
        }
    });
});


let bugger = document.querySelector('.bugger'),
    nav = document.querySelector('.nav');

bugger.addEventListener('click', function() {
    document.body.classList.toggle('active');
    this.classList.toggle('active');

    if () {
        nav.style.visibility = 'visible';
    } else {
        nav.style.visibility = 'hidden';
    }
});


