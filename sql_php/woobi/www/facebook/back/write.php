<?php

include('common.php');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<link rel="stylesheet" type="text/css" href="../view/style.css">
<body>

    <div id="incontainer">

        <form action="write_ok.php" method="post" class="writebox">
            <h2>게시물 만들기</h2>

            <ul class="wul1">
                <li><img src="https://i.ibb.co/Zhqg0Hb/login.png" width="40px"></li>
                <li><?php echo $_SESSION['userName'] ?></li>
            </ul>

            <textarea name="content" placeholder="<?php echo $_SESSION['userName'] ?>님, 무슨 생각을 하고 계신가요?"></textarea>
            
            <ul class="wul2">
                <li><img src="https://i.ibb.co/42hQR2n/color.png"></li>
                <li><img src="https://i.ibb.co/jTw5FYw/smile.png"></li>
            </ul>

            <ul class="wul3">
                <li>게시물에 추가</li>
                <li>
                    <img src="https://i.ibb.co/Kr5Q0qq/pic.png">
                    <img src="https://i.ibb.co/WVQtvXS/tag.png">
                    <img src="https://i.ibb.co/THccL2n/smile2.png">
                    <img src="https://i.ibb.co/CJhr3D0/pin.png">
                    <img src="https://i.ibb.co/9smmTj5/mic.png">
                    <img src="https://i.ibb.co/HgGn2Wb/more.png">
                </li>
            </ul>

            <button>게시</button>

        </form>

    </div>
    
</body>
</html>