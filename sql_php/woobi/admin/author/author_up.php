<?php
    include_once $_SERVER['DOCUMENT_ROOT'].'_lib/_con.php';
    include_once $_SERVER['DOCUMENT_ROOT'].'_lib/lib.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>작가 등록</title>
    <style>
        .err {
            color: red;
        }
    </style>
</head>
<body>

    <?php
        echo "<h4 class='err'>".$exp."</h4>"
    ?>
    
    <form action="author_up_ok.php" method="post" name="frmAuthor">
        <input type="text" maxlength="5" name="authorName">
        <input type="submit" value="등록">
    </form>

    <?php
        $sql = "SELECT * FROM Author ORDER BY name";

        $res = $conn1->query($sql);
        if ($res->num_rows) {
            echo '<table border =\'1\'><tr><th>작가명</th></tr>';
            while ($row = $res->fetch_assoc()) {
                echo '<tr><td>'.$row['name'].'</td></tr>';
            }
            echo '</table>';
        } else {

        }
    ?>

    <script src="/js/common.js"></script>
    <script src="js/author_up.js"></script>
</body>
</html>