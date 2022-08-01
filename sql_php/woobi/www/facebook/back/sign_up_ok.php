<?php

include('common.php'); //db 접속 정보

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "insert into fbmember set
        name = '$name',
        email = '$email',
        password = '$password'
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