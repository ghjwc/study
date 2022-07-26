<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/_db/_lib/lib.php";
    include_once $_SERVER["DOCUMENT_ROOT"]."/_db/_lib/_con.php";

    if ($_SESSION['userId']) {
        gotoUrl('../index.php');
    }

    $sqlGenre = "SELECT * FROM Genre ORDER BY name";
    $resGenre = $conn1->query($sqlGenre);
    
    $sqlAuthor = "SELECT * FROM Author ORDER BY name";
    $resAuthor = $conn1->query($sqlAuthor);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입</title>
</head>
<body>
    <form action="join_ok.php" method="post">
        <table>
            <tr>
                <th>
                    <label for="userID">아이디</label>
                </th>
                <td>
                    <input type="text" name="userID">
                </td>
                <span id="hit"></span>
            </tr>
            <tr>
                <th>
                    <label for="userName">이름</label>
                </th>
                <td>
                    <input type="text" name="userName">
                </td>
            </tr>
            <tr>
                <th>
                    <label for="userPwd">비밀번호</label>
                </th>
                <td>
                    <input type="password" name="userPwd" id="userPwd">
                </td>
            </tr>
            <tr>
                <th>선호 장르</th>
                <td>
                    <?php
                        if ($resGenre->row_nums() > 0) {
                            while ($row = $resGenre->fetch_assoc()) {
                                echo "<label><input type=\"checkbox\" name =\"userGenre\" value=\"".$row["id"]."\">".$row["name"]."</label>&nbsp; &nbsp;";
                            }
                        }
                    ?>
                </td>
            </tr>
            <tr>
                <th>선호 작가</th>
                <td>
                    <?php
                        if ($resAuthor->row_nums() > 0) {
                            while ($row = $resAuthor->fetch_assoc()) {
                                echo "<label><input type=\"checkbox\" name =\"userAuthor\" value=\"".$row["id"]."\">".$row["name"]."</label>&nbsp; &nbsp;";
                            }
                        }
                    ?>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="submit" value="회원가입">
                </td>
            </tr>
        </table>
    </form>
    <script src="js/join.js"></script>
</body>
</html>