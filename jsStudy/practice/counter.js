const dec = document.querySelector('.dec'),
        reset = document.querySelector('.re'),
        inc = document.querySelector('.inc');

let num = document.querySelector('.num');

reset.addEventListener('click', () => {
    num.innerHTML = 0;
    color();
});

dec.addEventListener('click', () => {
    num.innerHTML = num.innerHTML - 1;
    color();
});

inc.addEventListener('click', () => {
    num.innerHTML = parseInt(num.innerHTML) + 1;
    color();
});

function color() {
    if (num.innerHTML < 0) {
        num.style.backgroundColor = 'yellow';
    } else if (num.innerHTML > 0) {
        num.style.backgroundColor = 'skyblue';
    } else {
        num.style.backgroundColor = 'lightpink';
    }
}
color();