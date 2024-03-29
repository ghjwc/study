<?php

    include_once('common.php');

    $title = $_POST['title'];
    $contents = addslashes($_POST['contents']);
    $userName = $_POST['userName'];
    $insertTime = date("Y-m-d H:i:s");

    $sql = "INSERT INTO Board SET
                title = '$title',
                contents = '$contents',
                userName = '$userName',
                insertTime = '$insertTime'
            ";

    $result = $conn->query($sql);

    if ($result) {
        echo "
            <script>
                location.href = '../index.php';
            </script>
        ";
    } else {
        echo "
            <script>
                alert('fail-write');
                history.back();
            </script>
        ";
    }

    // image upload

    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    $submit = $_POST['submit'];

    if (isset($submit)) {
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if ($check !== false) {
            echo "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            echo "File is not an image.";
            $uploadOk = 0;
        }
    }

    if (file_exists($target_file)) {
        echo "Sorry, file already exists.";
        $uploadOk = 0;
    }

    if ($_FILES["fileToUpload"]["size"] > 2048) {
        echo "Sorry, yout file is too large.";
        $uploadOk = 0;
    }

    if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }
    
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";

    } else {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            echo "<p>The file ". basename($_FILES["fileToUpload"]["name"]). " has been uploaded.</p>";
            echo "<br><img src=uploads/". basename($_FILES["fileToUpload"]["name"]). ">";
            echo "<br><button type='button' onclick='history.back()'>돌아가기</button>";
        } else {
            echo "<p>Sorry, there was an error uploading your file.</p>";
            echo "<br><button type='button' onclick='history.back()'>돌아가기</button>";
        }
    }
    

?>