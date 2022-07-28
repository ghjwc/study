<?php
    $servername = "localhost";
    $username = "return";
    $password = "www1234";
    $db = "return";

    //mysqli 객체
    $conn1 = new mysqli($servername, $username, $password, $db);
    // Check connection
    if ($conn1->connect_error) {
    die("conn1 Connection failed: " . $conn1->connect_error);
    }

    //mysqli 절차
    $conn2 = mysqli_connect($servername, $username, $password);

    // Check connection
    if (!$conn2) {
        die("conn2 Connection failed: " . mysqli_connect_error());
    }

    //PDO 객체
    try {
        $conn3 = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
        // set the PDO error mode to exception
        $conn3->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      } catch(PDOException $e) {
        echo "conn3 Connection failed: " . $e->getMessage();
      }
?>