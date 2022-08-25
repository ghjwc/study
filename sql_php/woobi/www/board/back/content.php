<?php

    include_once('common.php');

    $no = $_GET['no'];

    $sql = "SELECT
                userName,
                insertTime,
                title,
                contents
            FROM Board
            WHERE contentsNo = '$no';
        ";

    $result = $conn->query($sql);

    // die($result);

    // while ($data = mysqli_fetch_assoc($result)) {
    //     echo $data['userName'];
    // }
    $data = mysqli_fetch_assoc($result);
    
    if ($data) {

    } else {
        echo "
            <script>
                alert('fail-contents');
                location.href = '../index.php';
            </script>
        ";
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>content</title>
    <link rel="stylesheet" href="../view/style.css">
</head>
<body>

    <div class="container">
        <div class="board">
            <div class="contentsDiv">
                <div class="contentsTitle">
                    <?php echo $data['title']; ?>
                </div>
                <div class="contentsName">
                    <?php echo $data['userName']; ?>
                </div>
                <div class="contentsDate">
                    <?php echo $data['insertTime']; ?>
                </div>
                <div class="contents">
                    <?php echo $data['contents']; ?>
                </div>

                <div class="backBtnDiv">
                    <button class="backBtn">BACK TO THE LIST</button>
                </div>
            </div>
        </div>
        
    </div>
    
    <script src="../view/main.js"></script>
</body>
</html>