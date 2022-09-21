<?php
    include('common.php');

    $no = $_GET['no'];

    $sql = "DELETE FROM MovieBoard
            WHERE contentsNo = $no";

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