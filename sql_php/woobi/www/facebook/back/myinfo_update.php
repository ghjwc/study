<?php

include('common.php');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<link rel="stylesheet" type="text/css" href="../view/style.css">
<body>
    
    <form action="sign_up_ok.php" method="post" id="upcontainer">
        <div class="join">
            <b style="font-size: 30px;">정보 수정</b>
            <br><br>
            <input name="name" style="background-color: #f5f5f5;"  value="<?php echo $_SESSION['name']; ?>" type="text" placeholder="이름" readonly>
            <input name="email" style="background-color: #f5f5f5;" value="<?php echo $_SESSION['email']; ?>" type="email" placeholder="name@example.com" readonly>
            <input name="prepassword" type="password" placeholder="기존 비밀번호">
            <input name="afterpassword" type="password" placeholder="바꿀 비밀번호">

            <button class="upnewacc" type="submit">수정 완료</button>
            <button class="upnewacc1" type="submit">탈퇴하기</button>
        </div>
    </form>

</body>
</html>