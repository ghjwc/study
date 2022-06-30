const canvas = document.querySelector('#board'),
    ctx = canvas.getContext('2d');

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

function play() {
    board.getEmptyBoard();
    let piece = new Piece(ctx);
    piece.draw();

    board.piece = piece;
}

moves = {
    [KEY.LEFT]: P => ({...P, x: P.x - 1}),
    [KEY.RIGHT]: P => ({...P, x: P.x + 1}),
    [KEY.UP]: P => ({...P, x: P.y + 1})
}

const p = this.moves[event.key](this.piece);

document.addEventListener('keydown', event => {
    if (moves[event.keyCode]) {
        event.preventDefault();

        let p = moves[event.keyCode](board.piece);

        if (board.valid(p)) {
            board.piece.move(p);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            board.piece.draw();
        }
    }
});