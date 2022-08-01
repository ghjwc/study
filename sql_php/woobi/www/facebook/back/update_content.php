<?php


include('common.php');

$no = $_GET['no'];

$sql = "select
            content,
            writer,
            insertTime
        from fbboard
        where no = '$no'";

$result = $conn -> query($sql);

$data = mysqli_fetch_assoc($result);

if($data) {

} else {
    echo "
    <script>
        alert('비정상 접근');
        location.href='index.php';
    </script>
    ";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>