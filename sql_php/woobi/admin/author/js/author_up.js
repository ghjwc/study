let frmAuthor = document.frmAuthor,
    authorName = document.frmAuthor.authorName,
    btnSubmit = document.querySelector('[type=button]');

console.log(frmAuthor);
console.log(authorName);
console.log(btnSubmit);

authorName.addEventListener('keyup', function() {
    this.value = onlyKorean(this.value);
});

btnSubmit.addEventListener('onclick', function() {
    chkSubmit();
})

function chkSubmit() {
    //trim() - 앞뒤 공백 제거
    if (authorName.value.trim().length) {
        frmAuthor.submit();
    }
    return false;
}

function delAuthor(authorID, authorName) {
    if (confirm(authorName + '작가님을 삭제하시겠습니까?')) {
        location.href = 'author_del.php?authorID=' + authorID;
    }
}

function upAuthor(authorID, auName) {
    console.log(btnSubmit);
    btnSubmit.value = '수정';
    authorName.value = auName;
    frmAuthor.action = 'author_update.php?authorID=' + authorID;
}