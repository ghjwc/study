window.onload = function () {
    var p = document.getElementsByClassName("p");
    var txt = document.getElementsByClassName("txt");
    var t = [50, 50, 50, 50, 50];
    var s = [90, 30, 100, 70, 80]
    var timer = [];

    for (var i = 0; i < p.length; i++) {
        (function (i) {
            timer[i] = setInterval(function () {
                p[i].value += 1;
                if (p[i].value == s[i]) {
                    clearInterval(timer[i]);
                }
                txt[i].innerText = p[i].value + "%";
            }, t[i]);
        })(i);
    }
}