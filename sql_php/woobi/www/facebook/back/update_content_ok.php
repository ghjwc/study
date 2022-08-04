<?php

include('common.php');

print_r($_POST);
$userNo = $_POST['userNo'];
$content = $_POST['content'];

$sql = "UPDATE Facebook SET
        content = '$content',
        WHERE userNo = '$userNo'";
        

$result = $conn -> query($sql);

if($result) {
    echo "
    <script>
        alert('수정 성공!');
        location.href='index.php';
    </script>
    ";
}


?>