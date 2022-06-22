let icon = document.querySelector('#icon');
let input = document.querySelector('input');
let search = document.querySelector('#search');

icon.style.position = 'absolute';
input.style.display = 'none';
search.style.display = 'none';


icon.onclick = function() {
    if (input.style.display == '' && search.style.display == '') {
            input.style.display = 'none';
            search.style.display = 'none';
    } else {
            input.style.display = '';
            search.style.display = '';
            icon.style.left = 0;
    }
}