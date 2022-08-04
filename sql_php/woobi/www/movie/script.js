const userPhone = document.getElementById('userPhone'),
        userID = document.getElementById('userID'),
        idChkF = document.getElementById('idChkF'),
        idChkT = document.getElementById('idChkT'),
        frame = document.querySelector('.double > .frame:first-child');

userPhone.onkeypress = (e) => {
    if (e.key >= 0 && e.key <= 9) {
        return true;
    } else {
        userPhone.value = userPhone.value.replace(/[^0-9]/g, '');
        return false;
    }
}

userPhone.onkeyup = (e) => {
    if (e.key >= 0 && e.key <= 9) {
        return true;
    } else {
        userPhone.value = userPhone.value.replace(/[^0-9]/g, '');
        return false;
    }
}

userID.onkeyup = () => {
    chkID();
}

function chkID() {
    let http = new XMLHttpRequest();
    http.onreadystatechange = () => {
        if (http.status == 200 && http.readyState == http.DONE) {
            if (JSON.parse(http.response)['result'] == 'yes') {
                idChkF.style.display = 'block';
                idChkT.style.display = 'none';
                frame.style.marginBottom = 0;
            } else if (userID.value == '') {
                idChkF.style.display = 'none';
                idChkT.style.display = 'none';
                frame.style.marginBottom = '1.5rem';
            } else {
                idChkF.style.display = 'none';
                idChkT.style.display = 'block';
                frame.style.marginBottom = 0;
            }
        }
    }
    let url = "http://return.woobi.co.kr/movie/check_id.php?userID=" + userID.value;
    http.open('GET', url);
    http.send();
}