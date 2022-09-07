<?php
    include('common.php');

    $sql = "SELECT
                $userID,
                $userPwd,
                $userName,
                $userPhone,
                $userGender,
                $userGenre,
                $userDir
            FROM Movie";

    if ($_SESSION) {

    } else {
        echo "
            <script>
                location.href='login.php';
            </script>
            ";
    }

    $result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>main</title>
    <link rel="stylesheet" href="../view/css/style.css">
</head>
<body>

    <div class="wrapper widx">
        <div class="container ci">
            <div>
                <p><<?php echo $_SESSION['userDir'] ?>></p>
                 작품을 좋아하시는
                <br>
                <span><?php echo $_SESSION['userName'] ?></span>
                님,
                <br>
                환영합니다 !
            </div>

            <div class="indexBtnDiv">
                <form action="board.php" method="post">
                    <input type="submit" value="GO TO THE BOARD">
                </form>

                <form action="logout.php" method="post">
                    <input type="submit" value="LOGOUT">
                </form>
            </div>

        </div>
    </div>
    
</body>
</html>