<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/rwb/_lib/_con.php";

    include_once $_SERVER["DOCUMENT_ROOT"]."/rwb/_lib/lib.php";

    $err = $_GET["err"];
    if ($err) {
        $exp = $_GET["exp"];
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="EUC-KR">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>작가등록</title>
    <style>
    .err {
        color: red;
    }
    </style>
</head>
<body>
    <!-- onsubmit="chkSubmit();" -->
    <?php
        echo "<h4 class='err'>".$exp."</h4>";
    ?>
    <form action="author_up_ok.php" method="post" name="frmAuthor">
        <input type="text" maxlength="5" name="authorName">
        <input type="button" value="등록">
    </form>
  <?
    $sql = "SELECT * FROM Author ORDER BY name";

    $res = $conn1->query($sql);
    if ($res->num_rows) {
        echo "<table border='1'><tr><th colspan='2'>작가명</th></tr>";
        while ($row = $res->fetch_assoc()) {
        echo "<tr><td>".$row["name"]."</td><td><button onclick='delAuthor(\"".$row["id"]."\", \"".$row["name"]."\");'>삭제</button><button onclick='upAuthor(\"".$row["id"]."\", \"".$row["name"]."\");'>수정</button></td></tr>";
    }
    echo "</table>";
    } else {

    }
  ?>

    <script src="/rwb/js/common.js"></script>
    <script src="js/author_up.js"></script>
</body>
</html>