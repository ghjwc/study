<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/_db/_lib/lib.php";
    include_once $_SERVER["DOCUMENT_ROOT"]."/_db/_lib/_con.php";

    $userId = $_POST["userId"];
    $userPwd = hash("sha256", $_POST["userPwd"]);

    $sql = "SELECT * FROM USers WHERE userId = '$userId' AND pwd = '$userPwd'";

    $res = $conn1->query($sql);
    if ($res->num_rows) {
        echo 'ȸ��';
        $row = $res->fetch_assoc();
        // echo $row['name'];
        $_SESSION['userName'] = $row['name'];
        $_SESSION['userId'] = $row['userId'];
        gotoUrl('../index.php');
    } else {
        errHandler('../index.php', '���̵� ��й�ȣ�� �߸��Ǿ����ϴ�.');
    }

    echo $sql;
?>