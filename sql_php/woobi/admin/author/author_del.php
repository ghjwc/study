<?php
    include_once $_SERVER['DOCUMENT_ROOT'].'_lib/_con.php';
    include_once $_SERVER['DOCUMENT_ROOT'].'_lib/lib.php';

    $authorID = $_GET['authorID'];

    $sql = 'DELETE FROM Author WHERE id = \'$authorID\'';

    if ($conn1->query($sql) === TRUE) {
        gotoURL('author_up.php');
    } else {
        errHandler('author_up.php', $conn1->error);
    }
?>