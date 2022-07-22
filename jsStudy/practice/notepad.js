const dropBtn = document.querySelectorAll('.dropBtn'),
    dropCnt = document.querySelectorAll('.dropdown');

for (let i = 0; i < dropBtn.length; i++) {
    dropBtn[i].addEventListener('click', function() {
        if (dropCnt[i].style.display == 'none') {
            dropCnt[i].style.display = 'block';
        } else {
            dropCnt[i].style.display = 'none';
        }
    });
}
 