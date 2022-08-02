var isTrue = false;
//var 부모 윈도우에 속성
let popup,
    btn = document.querySelector("button");

function chkSum() {
    popup = window.open('popup-child.html');
    popup.onbeforeunload = function() {
        if(parent.isTrue) {
            console.log('done');
            //return true;
        }
    }
    return false;
}

btn.onclick = () => {
    console.dir(opener);
    opener.isTrue = true;
    window.close();
}