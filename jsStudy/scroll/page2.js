let pos = [], screen = 0, rows = null;

window.addEventListener('load', function () {

    let btns = document.querySelectorAll('button');
    rows = document.querySelectorAll('.row');

    // let pos = getPos();

    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = function() {
            screen = i;
            pos = getPos(rows);
            
            window.scrollTo({top: pos[i].y, left: pos[i].x, behavior: 'smooth'});
        };
    }
});

window.addEventListener('scroll', function() {

    // console.log(window.scrollX + " : " + window.scrollY);
    // console.log(pos[screen]);

    if (pos[screen]) {
        if (window.scrollX == pos[screen].x && window.scrollY == pos[screen].y) {
            show(screen);
        }
    }
});

function show(screen) {
    unplay();

    switch(screen) {

    case 0:
        console.log('첫 번째 화면');
        break;

    case 1:
        console.log('두 번째 화면');
        break;

    case 2:
        play();
        break;

    case 3:
        break;
    }
}

function play() {

    let div = rows[0].children[2].children[0];

    div.style.textAlign = 'center';
    div.style.fontSize = '100px'
    
    setTimeout(function() {
        div.innerText = 'show';
    }, 500);

}

function unplay() {

    let div = rows[0].children[2].children[0];
    div.innerText = '';

}

function getPos(rows) {

    let pos = [];

    for (let i = 0; i < rows.length; i++) {

        for(let div of rows[i].children) {

            let intPosY = div.offsetTop;
            let intPosX = div.offsetLeft;

            pos.push({x: intPosX, y: intPosY});

        }

    }
    return pos;
}