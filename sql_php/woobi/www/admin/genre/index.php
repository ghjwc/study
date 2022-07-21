<?php
    $err = $_GET['err'];
    if ($err) {
        $exp = $_GET['exp'];
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>장르 등록</title>
</head>
<body>

<?php
    $exp ? print("<h4 class='error'>$exp</h4>") : '';
?>

<form action="genre_up_ok.php" method="post">
    <input type="text" name="genreName">
    <input type="submit" value="등록">
</form>

<?php
    $sql = "SELECT * FROM Genre ORDER BY name";

    $res = $conn1->query($sql);

    echo '<table border="1"><tr><th colspan="3">장르</th></tr>';

    while($row = $res->fetch_assoc()) {
        echo '<tr><td>'.$row['name'].'</td><td><button onclick="delGenre('.$row['id'].')">삭제</button><button>수정</button></td></tr>';
    }

    echo '<table>';
?>

    <script src="/js/common.js"></script>
    <script src="/admin/genre/js/genre.js"></script>
</body>
</html>