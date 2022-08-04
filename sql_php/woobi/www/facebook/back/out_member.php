<?php
include("common.php");

$userNo = $_SESSION['userNo'];

$sql = "DELETE FROM Facebook
        WHERE userNo = '$userNo'";

$result = $conn -> query($sql);

if($result) {
    echo "
    <script>
        alert('탈퇴 완료');
        location.href = 'sign_in.php';
    </script>
    ";
} else {
    echo "
    <script>
        alert('탈퇴 실패');
        history.back();
    </script>
    ";
}


?>