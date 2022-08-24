<?php

    include_once('common.php');

    $title = $_POST['title'];
    $contents = addslashes($_POST['contents']);
    $userName = $_POST['userName'];
    $insertTime = date("Y-m-d H:i:s");

    $sql = "INSERT INTO Board SET
                title = '$title',
                contents = '$contents',
                userName = '$userName',
                insertTime = '$insertTime'
            ";

    $result = $conn->query($sql);

    if ($result) {
        echo "
            <script>
                location.href = '../index.php';
            </script>
        ";
    } else {
        echo "
            <script>
                alert('fail');
                history.back();
            </script>
        ";
    }

?>