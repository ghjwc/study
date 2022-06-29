let input = document.querySelector('input'),
    div = document.querySelector('div');

input.oninput = function() {
    let write = this.value;

    if (write != null) {
        div.innerText = write;
    } else {
        div.innerText = '';
    }
}