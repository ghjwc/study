// 콜백함수 : 함수를 다른 함수의 인자로 전달하여 나중에 실행

// que(str) : 질문 내용
// yes(func) : 동의 시 실행 함수
// no(func) : 거절 시 실행 함수

function quest(que, yes, no) {
    if (confirm(que)) yes();
    else no();
}

function ok() {
    alert('동의');
}

function reject() {
    alert('거절');
}

quest('동의하시나요?' , ok , reject);