<?php

include("common.php");

print_r($_POST);

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$prepassword = $_POST['prepassword'];
$afterpassword = $_POST['afterpassword'];

if($prepassword != $_SESSION['userPwd']) {
    echo "
        <script>
            alert('비밀번호가 일치하지 않습니다.');
            history.back();
        </script>
        ";
} else {
    $sql = "UPDATE Facebook SET
            userPwd = '$afterpassword'
            WHERE userEmail = '$userEmail'
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