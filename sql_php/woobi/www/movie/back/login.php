<?php
    include('common.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>login</title>
    <link rel="stylesheet" href="../view/css/style.css">
</head>
<body>

    
    <div class="wrapper wlogin">
        <div class="container cl">
            <form action="login_ok.php" method="post">
                <div class="double">
                    <div class="frame login">
                        <div>ID</div>
                        <input type="text" name="userID">
                    </div>
                    <div class="frame login">
                        <div>PASSWORD</div>
                        <input type="password" name="userPwd">
                    </div>
                </div>
                <div class="frame login">
                    <input type="submit" value="LOGIN">
                </div>
            </form>
            <form action="join.php" method="post">
                <div class="frame login">
                    <input type="submit" value="JOIN">
                </div>
            </form>
        </div>
    </div>

</body>
</html>