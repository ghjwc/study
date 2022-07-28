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
        <a href="admin/">??????</a>
    </li>
    <li>
        <a href="user/join.php">???????</a>
    </li>
</ul>

<?php if (!$_SESSION['userId']) { ?>

<form action="user/login.php" method="post">
    <input type="text" name="userId">
    <input type="password" name="userPwd">
    <input type="submit" value="?α???">
</form>

<div>
    <?php echo $exp ?>
</div>
<?php } else { ?>
    <div><?php echo $_SESSION['userId'] ?> ?? ????????.</div>
<?php } ?>
<button onclick="location.href='user/logout.php'">?α???</button>

</body> 
</html>