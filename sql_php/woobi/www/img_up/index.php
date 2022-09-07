<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>img upload</title>
</head>
<body>
    
<form action="upload_ok.php" method="post" enctype="multipart/form-data">

    <div>
        <input type="file" name="myfile">
    </div>

    <input type="submit" name="action" value="upload">
</form>

</body>
</html>