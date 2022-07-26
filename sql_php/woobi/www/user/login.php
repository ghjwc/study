<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/_db/_lib/lib.php";
    include_once $_SERVER["DOCUMENT_ROOT"]."/_db/_lib/_con.php";

    $userId = $_POST["userId"];
    $userPwd = hash("sha256", $_POST["userPwd"]);

    $sql = "SELECT * FROM USers WHERE userId = '$userId' AND pwd = '$userPwd'";

    $res = $conn1->query($sql);
    if ($res->num_rows) {
        echo '회원';
        $row = $res->fetch_assoc();
        // echo $row['name'];
        $_SESSION['userName'] = $row['name'];
        $_SESSION['userId'] = $row['userId'];
        gotoUrl('../index.php');
    } else {
        errHandler('../index.php', '아이디나 비밀번호가 잘못되었습니다.');
    }

    echo $sql;
?>