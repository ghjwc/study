<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/_db/_lib/lib.php";
    include_once $_SERVER["DOCUMENT_ROOT"]."/_db/_lib/_con.php";

    var_dump($_POST["userAuthor"]);

    $pwd = hash("sha256", $_POST["userPwd"]);

    $sql = "INSERT INTO Users (name, userId, pwd) VALUES ('".$_POST["userName"]."', '".$_POST["userId"]."', '$pwd');";

    if ($conn1->query($sql) === TRUE) {
        $last_id = $conn1->insert_id;

        // echo $_POST["userGenre"]."<br>";
        foreach($_POST["userGenre"] as $key=>$val) {
            $sql = "INSERT INTO Like_Genre (User_id, Genre_id) VALUES ($last_id, $val)";

            $conn1->query($sql);
        }

        foreach($_POST["userAuthor"] as $key=>$val) {
            $sql = "INSERT INTO Like_Author (User_id, Author_id) VALUES ($last_id, $val)";

            $conn1->query($sql);
        }
    }
?>