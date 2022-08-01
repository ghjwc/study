<?php

include("common.php");

print_r($_POST);

$name = $_POST['name'];
$email = $_POST['email'];
$prepassword = $_POST['prepassword'];
$afterpassword = $_POST['afterpassword'];

if($prepassword != $_SESSION['password']) {
    echo "
        <script>
            alert('비밀번호가 일치하지 않습니다.');
            history.back();
        </script>
        ";
} else {
    $sql = "update fbmember set
            password = '$afterpassword'
            where email = '$email'
            ";
    $result = $conn -> query($sql);

    if($result) {
        session_destroy();
        echo "
        <script>
            alert('수정 성공');
            location.href='sign_in.php';
        </script>
        ";
    } else {
        echo "
        <script>
            history.back();
        </script>
        ";
    }
}

?>