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

    // print_r($conn1);
    // echo '<br><br>';
    // print_r($conn2);
    // echo '<br><br>';
    // print_r($conn3);
    // echo '<br><br>';
    
    $err = $_GET['err'];

    if ($err) {
        $exp = $_GET['exp'];
    }
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

<?php if (!$_SESSION['userId']) { ?>

<form action="user/login.php" method="post">
    <input type="text" name="userId">
    <input type="password" name="userPwd">
    <input type="submit" value="로그인">
</form>

<div>
    <?php echo $exp ?>
</div>
<?php } else { ?>
    <div><?php echo $_SESSION['userId'] ?> 님 반갑습니다.</div>
<?php } ?>
<button onclick="location.href='user/logout.php'">로그아웃</button>

</body> 
</html>