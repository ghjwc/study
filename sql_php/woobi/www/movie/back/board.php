<?php
include('common.php');

function page($start, $totalCount, $rowPerPage, $blockSet, $first, $pre, $next, $last)
{
    echo "<a href='?start=0'>$first</a>  ";

    $page = floor($start / ($rowPerPage * $blockSet));
    if ($totalCount > $rowPerPage) {
        if ($start + 1 > $rowPerPage * $blockSet) {
            $pre_start = $page * $rowPerPage * $blockSet - $rowPerPage;
            echo "<a href='?start=$pre_start'>$pre</a>";
        } else echo "$pre";
    } else echo "$pre";

    if ($totalCount > 0) echo "| ";

    for ($vj = 0; $vj < $blockSet; $vj++) {
        $ln = ($page * $blockSet + $vj) * $rowPerPage;
        $page_num = $page * $blockSet + $vj + 1;
        if ($ln < $totalCount) {
            if ($ln != $start) echo "<a href='?start=$ln'><b>$page_num</b></a> | ";
            else echo "[<b>$page_num</b>] | ";
        }
    }

    if ($totalCount > (($page + 1) * $rowPerPage * $blockSet)) {
        $n_start = ($page + 1) * $rowPerPage * $blockSet;
        echo  "<a href='?start=$n_start'>$next</a>";
    } else echo  $next;

    $end_start = floor($totalCount / $rowPerPage - 1) * $rowPerPage;
    echo "  <a href='?start=$end_start'>$last</a>";
}

$start = 0;
if (isset($_GET["start"])) {
    $start = $_GET["start"];
}

$sql = "SELECT COUNT(*) AS cnt FROM MovieBoard";
$result = $conn->query($sql);
$totalCount = $result->fetch_assoc()['cnt'];

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

if ($_SESSION['userID'] == "") {
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
    <title>board</title>
    <link rel="stylesheet" href="../view/css/style.css">
</head>

<body>

    <div class="wrapper board">
        <div class="container cb">
            <table>

                <?php
                    if ($totalCount == 0) {
                        echo "test";
                    } else {
                        $rowPerPage = 10;
                        $blockSet = 5;
                        $link = "";
                
                        $sql = "SELECT * FROM MovieBoard ORDER BY insertTime DESC LIMIT " . $start . ", " . $rowPerPage;
                        $result = $conn->query($sql);
                
                
                        while ($row = mysqli_fetch_assoc($result)) { ?>
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
                <div>
                    <?php page($start, $totalCount, $rowPerPage, $blockSet, "¢¸", "<", ">", "¢º"); ?>
                </div>
                     <?php } ?>
                <button class="writeBtn">WRITE</button>
            </div>
        </div>
    </div>

    <script src="../view/js/main.js"></script>
</body>

</html>