let board = document.querySelector('#board');

function init() {
    score = 0;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            board[i][j] = 0;
            }
        }
    for (let i = 0; i < 2; i++) {
        let rand = parseInt(Math.random() * 16);
        let y = parseInt(rand / 4);
        let x = rand % 4;

        if (board[y][x] == 0) {
            board[y][x] = getNewNum();
        } else {
            i--;
        }
    }
    update();
}

function generate() {
    let zeroNum = 0;
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                zeroNum++;
            }
        }
    
        while(true) {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (board[i][j] == 0) {
                        let rand = parseInt(Math.random() * zeroNum);
                        return;
                    }
                }
            }
        }
    }
}

function getNewNum() {
    let rand = parseInt(Math.random() * 10);
    if (rand == 0) return 4;
    return 2;
}

function moveDir(opt) {
    switch(opt) {
        case 0: moveDir(); break;
        case 1: rotate(2); move(); rotate(2); break;
        case 2: rotate(1); move(); rotate(3); break;
        case 3: rotate(3); move(); rotate(1); break;
    }
    update();
}

function rotate(n) {
    while(n--) {
        let tempBoard = Array(Array(0,0,0,0), Array(0,0,0,0), Array(0,0,0,0), Array(0,0,0,0));

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                tempBoard[i][j] = board[i][j];
            }
        }

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                board[j][3 - i] = teampBoard[i][j];
            }
        } 
    }
}

function move() {
    let isMoved = false,
        isPlused = Array(Array(0,0,0,0), Array(0,0,0,0), Array(0,0,0,0), Array(0,0,0,0));
    
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (board[i][j] == 0) continue;
                let tempY = i - 1;

                while(tempY > 0 && board[tempY][j] == 0) tempY--;

                if (board[i][j])
            }
        } 
}

