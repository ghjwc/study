let btn = document.querySelector('button');

function con(e) {
    console.dir(e);
    console.dir(this);
}

btn.addEventListener('click', function() {
    alert('안녕하세요.');
});

btn.addEventListener('click', function() {
    console.dir(this);
} , {
    once: true,
    capture: true,
    passive: true
});

function showThis() {
    console.dir(this); //window 객체
}
showThis();

btn.removeEventListener('click', con , {
    once: false,
    capture: false,
    passive: false
});

class Menu {
    handleEvent(event) {
        let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        this[method](event);
    }

    onMousedown(e) {
        console.log(e);
        btn.innerHTML = '버튼을 눌렀습니다.';
    }

    onMouseUp(e) {
        console.log(e);
        btn.innerHTML = '버튼을 뗐습니다';
    }
}