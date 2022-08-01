<?php

    include('common.php');

    $userID = $_POST['userID'];
    $userPwd = $_POST['userPwd'];
    $userName = $_POST['userName'];
    $userPhone = $_POST['userPhone'];
    $userGender = $_POST['userGender'];
    $userGenre = $_POST['userGenre'];
    $userDir = $_POST['userDir'];
    
    $sql = "SELECT
            userID, userPwd, userPhone, userName, userGender, userGenre, userDir
            From Movie
            WHERE userID = '$userID'";

    $result = $conn->query($sql);

    $db_pw = mysqli_fetch_assoc($result);

    if ($db_pw) {
        if ($userPwd == $db_pw['userPwd']) {
            $_SESSION['userID'] = $db_pw['userID'];
            $_SESSION['userPwd'] = $db_pw['userPwd'];
            $_SESSION['userName'] = $db_pw['userName'];
            $_SESSION['userPhone'] = $db_pw['userPhone'];
            $_SESSION['userGender'] = $db_pw['userGender'];
            $_SESSION['userGenre'] = $db_pw['userGenre'];
            $_SESSION['userDir'] = $db_pw['userDir'];

            echo "
            <script>
                location.href='index.php';
            </script>
            ";
        } else {
            echo "
            <script>
                alert('fail');
                history.back();
            </script>
            ";
        }
    } else {
        echo "
            <script>
                history.back();
            </script>
            ";
    }

?>