let userId = document.querySelector('#userID'),
    hit = document.querySelector('#hit'),
    timer = null;

userId.addEventListener('keyup', function(e) {
    clearTimeout(timer);
    timer = setTimeout(chkId, 1500, this.value);
});

userId.focus();

function chkId(val) {
    if (val.length === 0) {
        hit.innerHTML = '';
        return false;
    } else {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText != '0') {
                    userId.style.backgroundColor = 'red';
                    userId.style.color = 'yellow';
                    hit.innerHTML = '<b class="err">사용 중인 아이디</b>';
                } else {
                    userId.style.backgroundColor = 'green';
                    userId.style.color = 'yellow';
                    hit.innerHTML = '<b class="ok">사용 가능한 아이디</b>';
                }
            // } else {
            //     hit.innerHTML = 'error';
            }
        };
        xmlhttp.open('GET', 'chkId.php?q=' + val, true);
        xmlhttp.send();
    }
}

function getLikeAuthors($conn1, $uid) {
       
}