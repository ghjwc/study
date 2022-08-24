const writeBtn = document.querySelector('.writeBtn'),
        backBtn = document.querySelector('.backBtn');

writeBtn.onclick = () => {
    location.href = './back/write.php';
}

backBtn.onclick = () => {
    location.href = './index.php';
}