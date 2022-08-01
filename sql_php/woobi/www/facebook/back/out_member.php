<?php
include("common.php");

$user_no = $_SESSION['no'];

$sql = "delete from fbmember where no $user_no";

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