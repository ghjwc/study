const writeBtn = document.querySelector('.writeBtn'),
        backBtn = document.querySelector('.backBtn');

if (writeBtn) {
    writeBtn.onclick = () => {
        location.href = './back/write.php';
    }
}

if (backBtn) {
    backBtn.onclick = () => {
        location.href = '../index.php';
    }
}