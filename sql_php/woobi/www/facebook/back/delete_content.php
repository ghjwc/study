<?php

include("common.php");

$userNo = $_GET['userNo'];

$sql = "DELETE FROM Facebook WHERE userNo = $userNo";

$result = $conn -> query($sql);

if($result) {
    echo "
    <script>
        alert('삭제 완료');
        location.href='index.php';
    </script>
    ";
} else {
    echo "
    <script>
        alert('삭제 실패');
        history.back();
    </script>
    ";
}


?>