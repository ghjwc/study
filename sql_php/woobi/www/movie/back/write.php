<?php

include_once('common.php');

if ($_SESSION['userID'] == "") {
    echo "<script>
            history.back();
        </script>";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>write</title>
    <link rel="stylesheet" href="../view/css/style.css">
</head>

<body>

    <div class="wrapper con">
        <div class="container cc">

            <form action="write_ok.php" method="POST">
                
                <div>
                    <input type="text" class="writeTitle" name="title" placeholder="TITLE" maxlength="25" required>
                </div>

                <div>
                    <textarea class="writeTxt" name="contents" placeholder="What's on your mind?" required></textarea>
                </div>

                <div class="wBtn">
                    <input type="submit" value="WRITE">
                </div>
            </form>

            <div class="backBtnDiv">
                <button class="backBtn">BACK</button>
            </div>
        </div>
    </div>
    <script src="../view/js/main.js"></script>
</body>

</html>