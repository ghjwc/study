<?php

include_once('common.php');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>write</title>
    <link rel="stylesheet" href="../view/style.css">
</head>

<body>

    <div class="container">
        <div class="board">
            <form action="write_ok.php" method="POST">
                <div>
                    <input type="text" name="userName" placeholder="NAME" maxlength="12" required>
                    <input type="password" placeholder="PASSWORD" maxlength="12" required>
                </div>
                <div>
                    <input type="text" name="title" placeholder="TITLE" maxlength="30" required>
                </div>
                <div>
                    <textarea name="contents" required></textarea>
                </div>
                <div>
                    <input type="file" name="" id="">
                </div>
                <div>
                    <input type="submit" value="WRITE">
                </div>
            </form>
            <div class="backBtnDiv">
                <button class="backBtn">BACK TO THE LIST</button>
            </div>
        </div>
    </div>
    <script src="../view/main.js"></script>
</body>

</html>