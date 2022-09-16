<?php

include('common.php');

$no = $_POST['no'];
// die($no);
$userID = $_SESSION['userID'];
$insertTime = date("Y-m-d H:i:s");
$userRe = addslashes($_POST['userRe']);

$sql = "INSERT INTO MovieRe SET
            userID = '$userID',
            insertTime = '$insertTime',
            userRe = '$userRe',
            contentsNo = $no
        ";
$result = $conn->query($sql);

if ($result) {
    echo "
        <script>
            location.href = 'contents.php?no=$no';
        </script>
    ";
} else {
    echo "
        <script>
            alert('fail-write');
            history.back();
        </script>
    ";
}

?>