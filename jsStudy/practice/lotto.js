var finish = 0;
window.onload = function (e) {
    var li = document.querySelectorAll('.circles>li');
    setInterval(function () {
        for (var i = 0; i < li.length; i++) {
            li[i].style.left = Math.floor(Math.random() * 101) + "%";
        }
    }, 25000);

    document.body.onclick = function (e) {
        finish = 0;
        this.style.pointerEvents = "none";
        document.getElementById("lucky").innerHTML = "Please wait ...";
        var listLotto = document.querySelectorAll('.lotto>li');
        var lotto = getLotto();
        for (var i = 0; i < listLotto.length; i++) {
            animateValue(listLotto[i], 0, lotto[i], 5000, 6);
        }
    }
}

function getLotto() {
    var max = 6;
    var lotto = new Array(max);
    var count = 0;
    var mFlag = true;

    while (count < max) {
        var number;
        number = Math.floor(Math.random() * 45) + 1;
        for (var i = 0; i < count; i++) {
            if (lotto[i] == number) mFlag = false;
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
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    // var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        id.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
            finish++;
            if (finish == counter) {
                document.body.style.pointerEvents = "auto";
                document.getElementById("lucky").innerHTML = "Your lucky number is";
            }
        }
    }, stepTime);
}