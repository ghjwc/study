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

    $sql = "SELECT
                reNo,
                userID,
                contentsNo,
                insertTime,
                userRe
            FROM MovieRe
            WHERE contentsNo = '$no'
            ORDER BY insertTime ASC
            ";
    // die($sql);
    $result = $conn->query($sql);
    // die($result);
    
    if (!$data) {
        echo "
            <script>
                location.href = '../index.php';
            </script>
        ";
    }
    
    if ($_SESSION['userID'] == "") {
        echo "test";
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
                    <?php
                        $day = $data['insertTime'];
                        $everyday = array("SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY");
                        echo $data['insertTime'] . '&nbsp;' . ($everyday[date('w', strtotime($day))]);
                        // echo $data['insertTime'];
                    ?>
                </div>
                <div class="contents">
                    <?php echo $data['contents']; ?>
                </div>

                <form action="reply_ok.php" method="POST">

                    <div class="contentsRe">
                        <?php while ($row = mysqli_fetch_assoc($result)) { ?>
                            <div class="reBox">
                                <div class="nametime">
                                    <div class="reName">
                                        <?php echo $row['userID'] ?>
                                    </div>
                                    <div class="reTime">
                                        <?php echo $row['insertTime'] ?>
                                    </div>
                                </div>
                                <div class="reply">
                                    <?php echo $row['userRe'] ?>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                    

                    <textarea class="reTxt" placeholder="What's on your mind?" name="userRe" required></textarea>
                    <div class="okBtn">
                        <input type="hidden" name="no" value="<?php echo $no ?>">
                        <input type="submit" value="WRITE">
                    </div>
                </form>
                
                <div class="backBtnDiv">
                    <button class="backBtn">BACK</button>
                </div>
            </div>
        </div>
        
    </div>
    
    <script src="../view/js/main.js"></script>
</body>
</html>