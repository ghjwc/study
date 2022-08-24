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
                    <input type="text" name="userName" placeholder="NAME">
                    <input type="password" placeholder="PASSWORD">
                </div>
                <div>
                    <input type="text" name="title" placeholder="TITLE">
                </div>
                <div>
                    <textarea name="contents"></textarea>
                </div>
                <div>
                    <input type="submit" value="WRITE">
                    <button class="backBtn">BACK</button>
                </div>
            </form>
        </div>
    </div>
    <script src="../view/main.js"></script>
</body>

</html>