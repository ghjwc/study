<?php
    include('common.php');

    $no = $_GET['no'];

    $sql = "DELETE FROM MovieBoard
            WHERE contentsNo = $no,
                userID = '$userID',
                insertTime = '$insertTime',
                userRe = '$userRe',
                reNo = '$reNo'
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
                alert('fail');
                location.href = 'board.php';
            </script>
        ";
    }
?>