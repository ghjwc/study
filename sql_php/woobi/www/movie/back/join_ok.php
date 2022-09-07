<?php
    include('common.php');

    $userID = $_POST['userID'];
    $userPwd = $_POST['userPwd'];
    $userName = $_POST['userName'];
    $userPhone = $_POST['userPhone'];
    $userGender = $_POST['userGender'];
    $userGenre = $_POST['userGenre'];
    $userDir = $_POST['userDir'];

    $sql = "INSERT INTO Movie SET
            userID = '$userID',
            userPwd = '$userPwd',
            userName = '$userName',
            userPhone = '$userPhone',
            userGender = '$userGender',
            userGenre = '$userGenre',
            userDir = '$userDir'
            ";
            // die($sql);

    $result = $conn->query($sql);

    if ($result) {
        echo "
            <script>
                location.href='login.php';
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
?>