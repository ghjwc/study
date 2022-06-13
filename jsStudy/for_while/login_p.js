let login = prompt("who's there?" , "");

let escPressed = false;
document.addEventListener("keydown", keyDownHandler, true);

function keyDownHandler(e) {
    if (e.keyCode == 27) {
        escPressed == false;
    }
} 

if (login == "Admin") {
    let pw =prompt("Password?" , "");
    if (pw == "TheMaster") {
       alert("환영합니다!"); 
    } else if (pw == '' || login == null) {
        alert("취소");
    } else {
        alert("비밀번호 인증 실패");
    }
} else if (login == '' || login == (escPressed == false)) {
    alert("취소되었습니다.");
} else {
    alert("인증에 실패하였습니다.");
}