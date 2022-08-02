<?php

    include('common.php');

    $userID = $_GET['userID'];

    $sql = "SELECT userID
            FROM Movie
            WHERE userID = '$userID'";
    
    $result = $conn->query($sql);

    $data = mysqli_fetch_assoc($result);

    if ($data) {
        echo json_encode(array('result' => 'yes'));
    } else {
        echo json_encode(array('result' => 'no'));
    }

?>