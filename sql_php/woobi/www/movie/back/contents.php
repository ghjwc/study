<?php

    include_once('common.php');

    $no = $_GET['no'];
    $userID = $_SESSION['userID'];

    $sql = "SELECT
                userID,
                insertTime,
                title,
                contents
            FROM MovieBoard
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
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>content</title>
    <link rel="stylesheet" href="../view/css/style.css">
</head>
<body>

    <div class="wrapper wcn">
        <div class="container ccn">
            <div class="contentsDiv">
                <div class="contentsTitle">
                    <?php echo $data['title']; ?>
                </div>
                <div class="contentsName">
                    <span>
                        <?php echo $data['userID']; ?>
                    </span>
                </div>
                <div class="contentsDate">
                    <?php echo $data['insertTime']; ?>
                </div>
                <div class="contents">
                    <?php echo $data['contents']; ?>
                </div>

                
                <div class="backBtnDiv">
                    <button class="backBtn">BACK</button>
                </div>
            </div>
        </div>
        
    </div>
    
    <script src="../view/js/main.js"></script>
</body>
</html>