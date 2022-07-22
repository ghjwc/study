<?php
    include_once $_SERVER['DOCUMENT_ROOT'].'www/_lib/_con.php';

    // echo $servername;

    // $conn = new mysqli($servername, $username, $password);

    // echo '<pre>';
    // var_dump($conn);
    // echo '</pre>';

    // if ($conn -> connect_error) {
    //     echo $conn -> connect_error;
    // }

    print_r($conn1);
    echo '<br><br>';
    print_r($conn2);
    echo '<br><br>';
    print_r($conn3);
    echo '<br><br>';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<ul>
    <li>
        <a href="admin/">관리자</a>
    </li>
    <li>
        <a href="user/join.php">회원가입</a>
    </li>
</ul>
    
</body>
</html>