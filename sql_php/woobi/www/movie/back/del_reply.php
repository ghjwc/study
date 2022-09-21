<?php
    include('common.php');

    $no = $_GET['no'];

    $sql = "DELETE FROM MovieRe
            WHERE contentsNo = $no";

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
                alert('fail');
                location.href = 'contents.php?no=$no';
            </script>
        ";
    }
?>