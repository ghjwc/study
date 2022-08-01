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
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>main</title>
    <link rel="stylesheet" href="view/style.css">
</head>
<body>

    <div class="wrapper widx">
        <div class="container ci">
            <div>
                WELCOME, <?php echo $_SESSION['userName'] ?> !
                 <div></div>
            </div>

            <form action="logout.php" method="post">
                <input type="submit" value="LOGOUT">
            </form>
        </div>
    </div>
    
</body>
</html>