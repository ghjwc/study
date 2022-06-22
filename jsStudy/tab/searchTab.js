window.onload = function() {
    let input = document.querySelector('input');
    let ul = document.querySelector('ul');

    // console.log(ul.children);

    input.oninput = function() {
        // console.dir(this.value.__proto__);
        let search = this.value.toUpperCase(); //대문자로 바꿈

        //oninput 대신 onkeydown 사용 가능

        for (let li of ul.children) {
            if (li.innerText.toUpperCase().indexOf(search) != -1) {
                li.style.display = '';
            } else {
                li.style.display = 'none';
            }
        }

        console.log(search);
    };
}