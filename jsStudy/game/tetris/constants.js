const COLS = 10,
    ROWS = 20;
    BLOCK_SIZE = 30;

function move(p) {
    this.x = p.x;
    this.y = p.y;
}

const KEY = {
    LEFT: 37,
    RIGHT:39,
    DOWN: 40
}
Object.freeze(KEY);

const X = 'x',
    a = {[X]: 5};
console.log(a.x);