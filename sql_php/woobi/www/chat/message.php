<?php
    include_once $_SERVER['DOCUMENT_ROOT'].'/_db/_lib/_con.php';
    include_once $_SERVER['DOCUMENT_ROOT'].'/_db/_lib/lib.php';

    $sql = "SELECT * FROM chat";

    $res = $conn1->query($sql);

    while ($row = $res->fetch_assoc()) {
        echo iconv("EUC-KR", "UTF-8", $row["userId"]." : ".$row["userSay"]."<br>");
    }

?>