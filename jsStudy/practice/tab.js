window.onload = function() {
    let btnArea = document.querySelector('.tab-btn-area');
    let btns = btnArea.children;
    let ctnArea = document.querySelector('.tab-contents');
    let ctns = ctnArea.children;

    // console.dir(ctns);

    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = function() {
            // console.log(this.innerText);
            
            for (let j = 0; j < btns.length; j++) {
                btns[j].classList.remove('active');
                ctns[j].classList.remove('active');
            }
            btns[i].classList.add('active');
            ctns[i].classList.add('active');
        }
    }
};
