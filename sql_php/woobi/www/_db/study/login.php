<?php
$uid = $_POST['uid'];
$pw = $_POST['pw'];
$uname = $_POST['uname'];
$sex = $_POST['sex'];
$email = $_POST['email'];
$birth = $_POST['birth'];


// echo 'user ID : '.$uid.'<br>';
// echo 'user Password : '.$pw.'<br>';
// echo 'user Name : '.$uname.'<br>';
// echo 'user Sex : '.$sex.'<br>';
// echo 'user Email : '.$email.'<br>';
// echo 'user Birthday : '.$birth.'<br>';

foreach($_POST as $key => $val) {
    echo $key.' : '.$val.'<br>';
}
?>