<?php
include('common.php');

$no = $_POST['no'];
$title = $_POST['title'];
$contents = $_POST['contents'];

$sql = "UPDATE MovieBoard SET
            title = '$title',
            contents = '$contents'
            WHERE contentsNo = $no
        ";

$result = $conn->query($sql);

if($result) {
    echo "
    <script>
        alert('ok');
        location.href='board.php';
    </script>
    ";
} else {
    echo "
    <script>
        alert('fail');
        location.href='board.php';
    </script>
    ";
} 

?>