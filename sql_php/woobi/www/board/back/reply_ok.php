<?php

include_once('common.php');

$sql = "SELECT
            replyName,
            replyTime,
            reply
        FROM BoardRe
        WHERE replyNo = '$no';
        ";

$result = $conn->query($sql);

// die($sql);

if ($result) {
    echo "
        <script>
            location.href = 'content.php?no=$no';
        </script>
        ";
} else {
    echo "
    <script>
        alert('작성 실패');
        history.back();
    </script>
    ";
}

?>