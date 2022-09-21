<?php
    include('common.php');

    $no = $_GET['no'];

    $sql = "SELECT
                userID,
                insertTime,
                title,
                contents
            FROM MovieBoard
            WHERE contentsNo = '$no'";

    $result = $conn->query($sql);

    $data = mysqli_fetch_assoc($result);

    if (!$data) {
        echo "
            <script>
                alert('fail');
                location.href = 'board.php';
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
    <title>write</title>
    <link rel="stylesheet" href="../view/css/style.css">
</head>

<body>

    <div class="wrapper con">
        <div class="container cc">

            <form action="update_content_ok.php" method="POST">
                
                <div>
                    <input type="text" class="writeTitle" name="title" maxlength="25" value="<?php echo $data['title'];?>" required>
                </div>

                <div>
                    <textarea class="writeTxt" name="contents" required>
                        <?php echo $data['contents'];?>
                    </textarea>
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