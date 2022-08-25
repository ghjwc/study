<?php

include_once('./back/common.php');

$sql = "SELECT
            contentsNo,
            userName,
            insertTime,
            title,
            contents
        FROM Board
        ORDER BY insertTime DESC
        ";

$result = $conn->query($sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>board</title>
    <link rel="stylesheet" href="./view/style.css">
</head>
<body>

    <div class="container">
        <div class="board">
            <table>
                
                <?php while ($row = mysqli_fetch_assoc($result)) { ?>
                    <tr>
                        <td>
                            <?php echo $row['contentsNo'] ?>
                        </td>
                        <td>
                            <a href="./back/content.php?no=<?php echo $row['contentsNo'] ?>">
                                <?php echo $row['title'] ?>
                            </a>
                        </td>
                        <td>
                            <?php echo $row['userName'] ?>
                        </td>
                        <td>
                            <?php echo $row['insertTime'] ?>
                        </td>
                    </tr>
                <?php } ?>
                
            </table>
            <div class="writeBtnDiv">
                <button class="writeBtn">WRITE</button>
            </div>
        </div>
    </div>
    
    <script src="./view/main.js"></script>
</body>
</html>