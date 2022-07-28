<?php
    include_once $_SERVER['DOCUMENT_ROOT'].'/_db/_lib/_con.php';
    include_once $_SERVER['DOCUMENT_ROOT'].'/_db/_lib/lib.php';

    $userName = $_POST['userName'];
    $word = $_POST['word'];

    // echo $userName." : ".$word;

    $sql = "INSERT INTO chat (id, word) VALUES ('$userName', '$word')";

    if ($conn1->query($sql) !== TRUE) {
        echo "<script>
                alert('$conn1->error');
              </script>";
    }
?>