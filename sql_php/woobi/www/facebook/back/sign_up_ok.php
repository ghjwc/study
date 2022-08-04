<?php

include('common.php'); //db 접속 정보

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPwd = $_POST['userPwd'];

$sql = "INSERT INTO Facebook SET
        userName = '$userName',
        userEmail = '$userEmail',
        userPwd = '$userPwd'
        ";

$result = $conn -> query($sql);

if($result) {
    echo "
    <script>
        location.href = 'sign_in.php'
    </script>
    ";
} else {
    echo "
    <script>
        alert('회원가입에 실패했습니다.');
        history.back();
    </script>
    ";
}


?>