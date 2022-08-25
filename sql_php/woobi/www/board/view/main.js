const writeBtn = document.querySelector('.writeBtn'),
        backBtn = document.querySelector('.backBtn');

if (writeBtn) {
    writeBtn.onclick = () => {
        location.href = './back/write.php';
    }
}

if (backBtn) {
    backBtn.onclick = () => {
        location.href = '../index.php';
    }
}

function elapsedTime(date) {
    const start = new Date(date),
            end = new Date(), //현재 날짜
            diff = (end - start); //경과 시간
    
    const times = [
        {time: '분', milliSeconds: 1000 * 60},
        {time: '시간', milliSeconds: 1000 * 60 * 60},
        {time: '일', milliSeconds: 1000 * 60 * 60 * 24},
        {time: '개월', milliSeconds: 1000 * 60 * 60 * 24 * 30},
        {time: '년', milliSeconds: 1000 * 60 * 60 * 24 * 365},
    ].reverse();

    for (const value of times) {
        const betweenTime = Math.floor(diff / value.milliSeconds);
        
        if (betweenTime > 0) {
            return `${betweenTime}${value.time} 전`;
        }
    }
    return '방금 전';
}

let indexDate = document.querySelectorAll('table > tbody > tr > td:last-child');

for (let i = 0; i < indexDate.length; i++) {
    date = indexDate[i].innerHTML;
    indexDate[i].innerHTML = elapsedTime(date);
}