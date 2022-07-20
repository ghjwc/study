<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/rwb/_lib/_con.php";
    include_once $_SERVER["DOCUMENT_ROOT"]."/rwb/_lib/lib.php";
    // $conn1, $conn2, $conn3

    $authorName = $_POST["authorName"];

    $sql = "SELECT id from Author WHERE name = '$authorName'";

    $res = $conn1->query($sql);

    if ($res->num_rows) {
        errHandler('author_up.php', '중복이름');
        } else {
        $sql = "INSERT INTO Author (name) values ('$authorName')";

        if ($conn1->query($sql) === TRUE) {
            gotoUrl('author_up.php');
        } else {
            errHandler('author_up.php', $conn1->error);
        }
    }
?>