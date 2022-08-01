<?php

include("common.php");

$no = $_GET['no'];

$sql = "delete from fbboard where no = $no";

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