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

    $sql2 = "SELECT
                replyName,
                replyTime,
                reply
            FROM BoardRe
            WHERE replyNo = '$no';
            ";

    $result = $conn->query($sql);
    $result2 = $conn->query($sql2);

    // die($result);

    // while ($data = mysqli_fetch_assoc($result)) {
    //     echo $data['userName'];
    // }
    $data = mysqli_fetch_assoc($result);
    $row = mysqli_fetch_assoc($result2);
    
    if ($data || $row) {

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
                    <span>
                        <?php echo $data['userName']; ?>
                    </span>
                </div>
                <div class="contentsDate">
                    <?php echo $data['insertTime']; ?>
                </div>
                <div class="contents">
                    <?php echo $data['contents']; ?>
                </div>

                <?php while ($row) { ?>
                    <div id="replyDiv">
                        <div>
                            <?php echo $row['replyName'] ?>
                            <?php echo $row['replyTime'] ?>
                        </div>
                        <div>
                            댓글 영역
                            <?php echo $row['reply'] ?>
                        </div>
                    </div>
                <?php } ?>

                <form id="replyForm" action="reply_ok.php" method="POST">
                    <div>
                        <input type="text" name="replyName" maxlength="12" placeholder="NAME" required>
                        <input type="password" name="replyPwd" maxlength="12" placeholder="PASSWORD" required>
                    </div>
                    <div>
                        <textarea name="reply" required></textarea>
                    </div>
                    <div>
                        <button class="writeBtn">OK</button>
                    </div>
                </form>

                <div class="backBtnDiv">
                    <button class="backBtn">BACK</button>
                </div>
            </div>
        </div>
        
    </div>
    
    <script src="../view/main.js"></script>
</body>
</html>