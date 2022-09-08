const userPhone = document.getElementById('userPhone'),
        userID = document.getElementById('userID'),
        idChkF = document.getElementById('idChkF'),
        idChkT = document.getElementById('idChkT'),
        frame = document.querySelector('.double > .frame:first-child');

if (userPhone) {
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
}

if (userID) {
    userID.onkeyup = () => {
        chkID();
    }
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

// button
const writeBtn = document.querySelector('.writeBtn'),
        backBtn = document.querySelectorAll('.backBtn');

if (writeBtn) {
    writeBtn.onclick = () => {
        location.href = './write.php';
    }
}

for (i = 0; i < backBtn.length; i++) {
    if (backBtn[i]) {
        backBtn[i].onclick = () => {
            history.back();
        }
    }
}

function elapsedTime(date) {
    const start = new Date(date),
            end = new Date(),
            diff = (end - start);
    
    const times = [
        {time: '분', milliSeconds: 1000 * 60}, //minutes
        {time: '시간', milliSeconds: 1000 * 60 * 60}, //hours
        {time: '일', milliSeconds: 1000 * 60 * 60 * 24}, //days
        {time: '개월', milliSeconds: 1000 * 60 * 60 * 24 * 30}, //months
        {time: '년', milliSeconds: 1000 * 60 * 60 * 24 * 365}, //years
    ].reverse();

    for (const value of times) {
        const betweenTime = Math.floor(diff / value.milliSeconds);
        
        if (betweenTime > 0) {
            return `${betweenTime}${value.time} 전`; //ago
        }
    }
    return '방금 전'; //now
}

let indexDate = document.querySelectorAll('table > tbody > tr > td:last-child');

for (let i = 0; i < indexDate.length; i++) {
    date = indexDate[i].innerHTML;
    indexDate[i].innerHTML = elapsedTime(date);
}

//trim
let txtDiv = document.querySelector('.contents');

if (txtDiv) {
    let txtHTML = document.querySelector('.contents').innerHTML;
    txtDiv.innerHTML = txtHTML.trim();
}