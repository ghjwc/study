let frmGenre = document.querySelector('form'),
    txtGenreName = document.querySelector('input[type=\'text\']');

console.log(frmGenre);
console.log(txtGenreName);
console.log(btnGenreOk);

frmGenre.onsubmit = function() {
    if (txtGenreName.value.trim().length == 0) {
        txtGenreName.placeholder = '값을 입력하세요.';
        txtGenreName.focus();
        return false;
    }
    return true;
};

function delGenre(genreID) {
    if (confirm('삭제하시겠습니까?')) {
        location.href = 'genre_del_ok.php?genreID=' + 
    }
}

function sortList(type) {
    location.href = 'index.php?sortType=' + type;
}