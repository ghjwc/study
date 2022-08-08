
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="zz.css">
</head>
<body>

    <div class="wrapper con">
        <div class="container cc">
            <form action="write_ok.php" method="post">
                
                <textarea name="content" placeholder="<?php echo $_SESSION['userName'] ?>님, 무슨 생각을 하고 계신가요?"></textarea>

                <div class="frame write">
                    <input type="submit" value="WRITE">
                </div>
            </form>
        </div>
    </div>
    
</body>
</html>