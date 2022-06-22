window.onload = function() {
    let bugger = document.querySelector('.bugger');
    let topGnb = document.querySelector('.top-gnb');
    console.log(topGnb.clientHeight);
    console.log(bugger.offsetHeight);

    bugger.style.position = 'absolute';
    bugger.style.top = topGnb.clientHeight / 2 - bugger.offsetHeight / 2 + 'px';
    bugger.style.left = topGnb.clientWidth - bugger.offsetWidth - 20 + 'px';

    bugger.onclick = function() {
        document.body.classList.toggle('show-mobile-menu');
    };
}

