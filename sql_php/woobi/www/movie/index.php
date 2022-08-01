<?php
    include('common.php');

    $sql = "SELECT
                $userID,
                $userPwd,
                $userName,
                $userPhone,
                $userGender,
                $userGenre,
                $userDir
            FROM Movie";

    if ($_SESSION) {

    } else {
        echo "
            <script>
                location.href='login.php';
            </script>
            ";
    }

    $result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>main</title>
    <link rel="stylesheet" href="style.css">
    <style>
        * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 10px;
}

body {
    font-size: 1.5rem;
    font-family: Helvetica;
}

body::-webkit-scrollbar {
    width: 0.3rem;
}
body::-webkit-scrollbar-thumb {
    background-color: tomato;
}
body::-webkit-scrollbar-track {
    background-color: white;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.wjoin {
    background-image: url(https://cdn.mos.cms.futurecdn.net/mrqSXFiyYup7WkhYDyxnPQ-1200-80.jpg);
}

.wlogin {
    background-image: url(https://assets.mubicdn.net/images/film/210029/image-w1280.jpg);
}

.widx {
    background-image: url(https://pbs.twimg.com/media/FVKy3qIaQAEvMo9?format=jpg&name=4096x4096);
}


.container {
    margin: 3rem;
    padding: 3rem;
    width: 50rem;
    font-size: 1.3rem;
    border-radius: 3rem;
    background-color: white;
}

.cj {
    border: 0.3rem solid tomato;
}

.cl {
    border: 0.3rem solid plum;
}

.ci {
    border: 0.3rem solid lightseagreen;
}

.double {
    display: flex;
    gap: 1rem;
}

.double > .frame {
    margin-right: 1rem;
    width: 100%;
}

.double > .frame:last-child {
    margin-right: 0;
}

.login > div:not(.fr-in) {
    color: plum;
    border: 0.3rem solid plum;
}

.frame:not(.login) {
    margin: 0 auto;
    margin-bottom: 1.5rem;
}

.frame > div:not(.fr-in) {
    padding: 1.5rem;
    font-weight: bold;
    border-radius: 3rem;
    color: tomato;
    border: 0.3rem solid tomato;
    background-color: white;
}

.login > div:not(.fr-in) {
    color: plum;
    border: 0.3rem solid plum;
}

.frame > input, .fr-in {
    margin-top: 1rem;
    background-color: #f5f5f5;
}

.frame > input[type='text'], .frame > input[type='password'] {
    padding-left: 1rem;
    width: 100%;
    height: 4rem;
    border-style: none;
    border-radius: 3rem;
}

.rd {
    line-height: 5rem;
    border-radius: 3rem;
}

.cbox {
    padding-bottom: 1rem;
    border-radius: 1.5rem;
}

.genre-wrap {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 23rem;
    /* background-color: yellow; */
}

input[type='radio'], input[type='checkbox'] {
    display: none;
}

input[type='radio'] + label, input[type='checkbox'] + label {
    padding: 1rem;
    color: white;
    border-radius: 3rem;
    background-color: lightgray;
    cursor: pointer;
}

input[type='radio'] + label:hover, input[type='checkbox'] + label:hover {
    background-color: gray;
}

input[type='radio']:checked + label, input[type='checkbox']:checked + label  {
    color: white;
    background-color: tomato;
}

input[type='checkbox'] + label {
    display: inline-block;
    margin-top: 1rem;
    line-height: 1.5rem;
}


input[type='submit'] {
    width: 50%;
    height: 5rem;
    border-style: none;
    border-radius: 3rem;
    color: white;
    background-color: tomato;
    cursor: pointer;
}

.login > input[type='submit'] {
    width: 100%;
    background-color: plum;
}

.ci > input[type='submit'] {
    width: 100%;
    background-color: lightseagreen;
}

.ci > div {
    padding: 0 3rem 3rem 3rem;
    font-size: 3rem;
    font-weight: bold;
    color: lightseagreen;
}

.ci > form > input {
    width: 50%;
    background-color: lightseagreen;
}

input[type='submit']:hover {
    background-color: gray;
}

@media screen and (max-width: 45rem) {

    .container {
        width: 85%;
    }

    .ci > div > div {
        width: 100%;
    }

    .double {
        flex-wrap: wrap;
    }
    
    .double > .frame {
        margin-right: 0;
    }

    .login > input[type='text'] {
        margin-bottom: 1rem;
    }
}
    </style>
</head>
<body>

    <div class="wrapper widx">
        <div class="container ci">
            <div>
                WELCOME, <?php echo $_SESSION['userName'] ?> !
            </div>

            <form action="logout.php" method="post">
                <input type="submit" value="LOGOUT">
            </form>
        </div>
    </div>
    
</body>
</html>