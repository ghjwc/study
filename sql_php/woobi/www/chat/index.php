<?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <div id="display"></div>

    <form action="chat_up.php" target="up" method="POST">
        <textarea name="word"></textarea>
        <input type="text" name="userName">
        <input type="submit" value="전송">
    </form>

    <iframe name="up"></iframe>
    
    <script src="script.js"></script>
</body>
</html>