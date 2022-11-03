let finish = 0;

window.onload = (e) => {
    let list = document.querySelectorAll('.circles > li');
    setInterval(() => {
        list.forEach((li) => {
            li.style.left = Math.floor(Math.random() * 101) + '%';
        })
    }, 25000);

    document.body.onclick = (e) => {
        finish = 0;

        // this.style.pointerEvents = 'none';
        
        document.querySelector('.lucky').innerHTML = 'Please wait...';

        let listLotto = document.querySelectorAll('.lotto > li');

        let lotto = getLotto();

        for (let i = 0; i < listLotto.length; i++) {
            animateValue(listLotto[i], 0, lotto[i], 5000, 6);
        }
    }
}

function getLotto() {
    let max = 6,
        lotto = new Array(max),
        count = 0,
        mFlag = true;

    while (count < max) {
        let number;

        number = Math.floor(Math.random() * 45) + 1;

        for (let i = 0; i < count; i++) {
            if (lotto[i] == number) {
                mFlag = false;
            }
        }

        if (mFlag) {
            lotto[count] = number;
            count++;
        }
        mFlag = true;
    }
    return lotto;
}

function animateValue(id, start, end, duration, counter) {
    let range = end - start,
        current = start,
        increment = end > start ? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(() => {
        current += increment;
        id.innerHTML = current;

        if (current == end) {
            clearInterval(timer);
            finish++;

            if (finish == counter) {
                // document.body.style.pointerEvents = 'auto';
                document.querySelector('.lucky').innerHTML = 'YOUR LUCKY NUMBER IS';
            }
        }

    }, stepTime);
}