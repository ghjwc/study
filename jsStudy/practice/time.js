const today = document.querySelector('input[type=date]'),
        ago = document.querySelector('#time');

today.valueAsDate = new Date;

function elapsedTime(date) {
    const start = new Date,
            end = new Date, //현재 날짜
            diff = (end - start); //경과 시간
    
    const times = [
        {time: '분', milliSeconds: 1000 * 60},
        {time: '시간', milliSeconds: 1000 * 60 * 60},
        {time: '일', milliSeconds: 1000 * 60 * 60 * 24},
        {time: '개월', milliSeconds: 1000 * 60 * 60 * 24 * 30},
        {time: '년', milliSeconds: 1000 * 60 * 60 * 24 * 365},
    ].reverse();

    // 년 단위부터 알맞은 단위 찾기

    for (const value of times) {
        const betweenTime = Math.floor(diff / value.milliSeconds);

        if (betweenTime > 0) {
            return `${betweenTime}${value.time} 전`;
        }
    }
    return '방금 전';
}

const timeChange = (date) => {
    ago.innerHTML = elapsedTime(date);
}

today.addEventListener('change', () => {
    timeChange(today.value);
})

today.setAttribute('max', new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0]);