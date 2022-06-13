let login;

while (login != 'Admin') { 

    let login = prompt('아이디를 입력하세요' , '');

    if (login == 'Admin') {
        while (login == 'Admin') break; {
            let pwCheck = prompt('비밀번호를 입력하세요.' , '');
            if (pwCheck == 'TheMaster') {
                alert('Welcome!');
                break;
            } else if (login == '' || login == null) {
                alert('취소했거나 공백입니다.');
            } else {
                alert('잘못된 비밀번호입니다.');
            }
        }
    } else if (login == '' || login == null) {
        alert('취소했거나 공백입니다.');
    } else {
        alert('잘못된 아이디입니다.');
    }
}