const words = ['옷걸이', '주차장', '컴퓨터', '강아지', '고양이'],
    index = Math.floor(Math.random() * 5),
    prevWord = document.querySelector('.prev-word'),
    time = document.querySelector('.time-container'),
    input = document.querySelector('#input-word'),
    defaultBack = input.style.backgroundColor;

let word = words[index],
    timeCount = 5;

prevWord.innerHTML = word;
time.innerHTML = timeCount;

const tick = () => {
    time.innerHTML = timeCount;
    if (timeCount === 0) {
        clearInterval(start);
        alert('GAME OVER');
    } else {
        timeCount -= 1;
    }
};
const start = setInterval(tick, 1000);

const updateWord = value => {
    const lastPrev = word[word.length - 1],
        firstNext = value[0];
    
    if (value.length === 3 && lastPrev === firstNext) {
        word = value;
        prevWord.innerHTML = word;
        timeCount = 5;
        primaryInput();
    } else {
        warningInput();
    }
    input.value = '';
};

const warningInput = () => {
    input.style.backgroundColor = 'red';
    input.style.borderRadius = '50px';
}

const primaryInput = () => {
    input.style.backgroundColor = defaultBack;
}