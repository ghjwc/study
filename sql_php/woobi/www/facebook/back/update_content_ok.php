<?php

include('common.php');

print_r($_POST);
$no = $_POST['no'];
$content = $_POST['content'];

$sql = "update fbboard set
        content = '$content',
        where no = $no";
        

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