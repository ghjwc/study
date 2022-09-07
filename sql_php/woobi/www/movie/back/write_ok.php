<?php

    include_once('common.php');

    $title = $_POST['title'];
    $contents = addslashes($_POST['contents']);
    $userID = $_SESSION['userID'];
    $insertTime = date("Y-m-d H:i:s");

    $sql = "INSERT INTO MovieBoard SET
                title = '$title',
                contents = '$contents',
                insertTime = '$insertTime',
                userId = '$userID'
            ";

    $result = $conn->query($sql);

    if ($result) {
        echo "
            <script>
                location.href = 'board.php';
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