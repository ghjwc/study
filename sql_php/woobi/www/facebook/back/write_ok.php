<?php

include('common.php');
$content = addslashes($_POST['content']);
$writer = $_SESSION['name'];
$insertTime = date("Y-m-d H:i:s");


$sql = "insert into fbboard set
        content = '$content',
        writer = '$writer',
        insertTime = '$insertTime'
        ";

$result = $conn -> query($sql);

if($result) {
    echo "
    <script>
        location.href='index.php';
    </script>
    ";
} else {
    echo "
    <script>
        alert('등록 실패');
        history.back();
    </script>
    ";
}

?>