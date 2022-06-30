const words = ['라따뚜이', '정한', '조슈아', '문준휘', '우지', '호랑해', '전원우', '민규', '이석민', '서명호', '부승관', '버논', '디노'],
    index = Math.floor(Math.random() * 13),
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
        alert('잘가');
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