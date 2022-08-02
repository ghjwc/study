<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>join</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="join_ok.php" method="post">
        <div class="wrapper wjoin">
            <div class="container cj">

                <div class="double">
                    <div class="frame">
                        <div>ID</div>
                        <input type="text" name="userID" id="userID" required>
                        <span id="idChkF">already taken</span>
                        <span id="idChkT">welcome!</span>
                    </div>

                    <div class="frame">
                        <div>PASSWORD</div>
                        <input type="password" name="userPwd" required>
                    </div>
                </div>

                <div class="double">
                    <div class="frame">
                        <div>NAME</div>
                        <input type="text" name="userName" required>
                    </div>
                    <div class="frame">
                        <div>MOBILE PHONE</div>
                        <input type="text" name="userPhone" id="userPhone" maxlength="11" required>
                    </div>
                </div>

                <div class="frame">
                    <div>GENDER</div>
                    <div class="fr-in rd">
                        <input type="radio" name="userGender" id="male">
                        <label for="male">MALE</label>
                        <input type="radio" name="userGender" id="female">
                        <label for="female">FEMALE</label>
                        <input type="radio" name="userGender" id="other">
                        <label for="other">OTHER</label>
                    </div>
                </div>

                <div class="frame">
                    <div>FAVORITE GENRE</div>
                    <div class="fr-in cbox">

                        <div class="genre-wrap">
                            
                            <input type="checkbox" name="userGenre" id="drama">
                            <label for="drama">DRAMA</label>
                            
                            <input type="checkbox" name="userGenre" id="horror">
                            <label for="horror">HORROR</label>

                            <input type="checkbox" name="userGenre" id="comedy">
                            <label for="comedy">COMEDY</label>
                            
                        </div>
                    
                        <div class="genre-wrap">

                            <input type="checkbox" name="userGenre" id="action">
                            <label for="action">ACTION</label>
                            
                            <input type="checkbox" name="userGenre" id="romance">
                            <label for="romance">ROMANCE</label>

                            <input type="checkbox" name="userGenre" id="crime">
                            <label for="crime">CRIME</label>

                        </div>
                        
                        <div class="genre-wrap">
                            <input type="checkbox" name="userGenre" id="thriller">
                            <label for="thriller">THRILLER</label>

                            <input type="checkbox" name="userGenre" id="scifi">
                            <label for="scifi">Sci-Fi</label>
                            
                            <input type="checkbox" name="userGenre" id="fantasy">
                            <label for="fantasy">FANTASY</label>
                            
                        </div>
                    </div>
                    
                </div>

                <div class="frame">
                    <div>FAVORITE MOVIE</div>
                    <input type="text" name="userDir" required>
                </div>

                <input type="submit" value="JOIN">

            </div>
        </div>
    </form>

    <script src="script.js"></script>
</body>
</html>