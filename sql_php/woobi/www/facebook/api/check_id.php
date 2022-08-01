<?php

include('../back/common.php');

$email = $_GET['email'];
$sql = "select email from fbmember
        where email = '$email'";

$result = $conn -> query($sql);

$data = mysqli_fetch_assoc($result);



if($data) {
    // print_r(array('result' => 'yes'));
    echo json_encode(array('result' => 'yes'));
} else {
    echo json_encode(array('result' => 'no'));
}

?>