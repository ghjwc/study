<?php
    $fName = $_REQUEST['fName']; //array
    $fName2 = $_POST['fName'];
    $fName3 = $_GET['fName'];
    $last = $_GET['lastName'];

    echo 'Request : '.$fName.'<br>';
    echo 'Post : '.$fName2.'<br>';
    echo 'Get : '.$fName3.'<br>';
    echo 'Get : '.$last.'<br>';

    foreach($_REQUEST as $key => $value) {
        echo $key.' : '.$val.'<br>';
    }
?>