<?php
    include('common.php');

    $sql = "SELECT
                userID,
                contentsNo,
                insertTime,
                title,
                contents
            FROM MovieBoard
            ORDER BY insertTime DESC
            ";

$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>board</title>
    <link rel="stylesheet" href="../view/css/style.css">
</head>
<body>

<div class="wrapper board">
        <div class="container cb">
            <table>
                
                <?php while ($row = mysqli_fetch_assoc($result)) { ?>
                    <tr>
                        <td class="boardTitle">
                            <a href="contents.php?no=<?php echo $row['contentsNo'] ?>">
                                <?php echo $row['title'] ?>
                            </a>
                        </td>
                        <td class="boardID">
                            <span>
                                <?php echo $row['userID'] ?>
                            </span>
                        </td>
                        <td class="boardTime">
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
    
    <script src="../view/js/main.js"></script>
</body>
</html>