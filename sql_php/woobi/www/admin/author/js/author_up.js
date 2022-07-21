let frmAuthor = document.frmAuthor;
let authorName = document.frmAuthor.authorName;
let btnSubmit = document.querySelector("[type=button]");

// console.log(frmAuthor);
// console.log(authorName);
// console.log(btnSubmit);

//keydown, keyup, keypress
//input
authorName.addEventListener('input', function() {
    this.value = onlyKorean(this.value);
});


btnSubmit.addEventListener('click', function() {
    chkSubmit();
});


function chkSubmit() {
    //trim() - 앞뒤 공백제거
    if (authorName.value.trim().length) {
        frmAuthor.submit();
    }
    return false;
}

function delAuthor(authorId, authorName) {
    if (confirm(authorName + "작가님를 삭제하시겠습니까?")) {
        location.href = "author_del.php?authorId=" + authorId;
    }
}

function upAuthor(authorId, auName) {
    let btnCancel = document.querySelector("#cancelBtn");
    if (btnCancel) btnCancel.remove();
    btnCancel = document.createElement("button");
    btnCancel.innerText = "취소";
    btnCancel.id = "cancelBtn";
    btnSubmit.insertAdjacentElement('afterend', btnCancel);
    btnSubmit.value = "수정";
    authorName.value = auName;
    frmAuthor.action = "author_update.php?authorId=" + authorId;
    btnCancel.addEventListener('click', function(e) {
        e.preventDefault();
        btnSubmit.value = "등록";
        authorName.value = "";
        frmAuthor.action = "author_up_ok.php";
        this.remove();
    });
}