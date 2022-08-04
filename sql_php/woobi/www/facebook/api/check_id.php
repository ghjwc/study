<?php

include('../back/common.php');

$email = $_GET['userEmail'];
$sql = "SELECT userEmail FROM Facebook
        WHERE userEmail = '$userEmail'";

$result = $conn -> query($sql);

$data = mysqli_fetch_assoc($result);



if($data) {
    // print_r(array('result' => 'yes'));
    echo json_encode(array('result' => 'yes'));
} else {
    echo json_encode(array('result' => 'no'));
}

?>