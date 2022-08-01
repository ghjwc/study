<?php
    include_once $_SERVER['DOCUMENT_ROOT'].'/_db/_lib/_con.php';
    include_once $_SERVER['DOCUMENT_ROOT'].'/_db/_lib/lib.php';

    // $sql = "CREATE TABLE paging (pID int AUTO_INCREASEMENT, pName varchar(255), PRIMARY KEY(pID));";

    // $conn->query($sql);

    function randName() {
        $strUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $strDown = "abcdefghijklmnopqrstuvwxyz";
        $inFirst = rand(4, 8);
        $inLast = rand(5, 10);
        $strFirst = "";
        $strLast = "";

        for ($i = 0; $i < $inFirst; $i++) {
            if (!$i) {
                $strFirst .= $strUp[rand(0, strlen($strUp) - 1)];
            } else {
                $strFirst .= $strDown[rand(0, strlen($strUp) - 1)];
            }
        }

        for ($i = 0; $i < $inLast; $i++) {
            if (!$i) {
                $strLast .= $strUp[rand(0, strlen($strDown) - 1)];
            } else {
                $strLast .= $strDown[rand(0, strlen($strDown) - 1)];
            }
        }

        return $strFirst." ".$strLast;
    }
    echo randName();

    $i = 0;

    while($i < 100) {
        $sql = "INSERT INTO paging (pName) VALUES ('".randName()."')";

        $conn->query($sql);
        $i++;
    }

    $sql = "SELECT COUNT(*) AS total FROM paging";
    $res = $conn->query($sql);
    $row = $res->fetch_assoc();
    $total = $row["total"];

    $start = 0;
    $_GET["start"] ? $start = $_GET["start"] : $start = 0;

    $viewCount = 2;
    // 전체 / 보이는 개수 = 페이지 수
    $page = ceil($total / $viewCount);

    for ($i = 0; $i < $page; $i++) {
        echo "<a href='?start=".($i*$viewCount)."'>".($i + 1)."</a> ";
    }

    echo "<hr>";

    $sql = "SELECT * FROM paging LIMIT 0, 10"; #0부터 10까지(0 = 1)
    $rec = $conn->query($sql);

    while($row = $rec->fetch_assoc()) {
        echo $row["pId"]." : ".$row["pName"]."<br>";
    }

    $conn->query($sql);
?>