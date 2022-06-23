window.onload = function() {
    let btns = document.querySelectorAll('button');
    let rows = document.querySelectorAll('#row');

    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = function() {
            let pos = getPos(rows);

            window.scrollTo({top: pos[i].y, left: pos[i].x, behavior: 'smooth'});
        };
    }
}

function getPos(rows) {
    let pos = [];

    // rows[0].children
    // rows[1].children

    for(let i = 0; i < rows.length; i++) {
        for (let div of rows[i].children) {
            let intPosY = div.offsetTop;
            let intPosX = div.offsetLeft;
            pos.push({x: intPosX, y: intPosY});
        }
    }
    return pos;
}
