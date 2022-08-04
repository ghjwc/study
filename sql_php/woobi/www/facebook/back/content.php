<?php

include('common.php');


$sql = "SELECT
            content,
            writer,
            insertTime,
            likeCount,
            views
        FROM Facebook
        ORDER BY insertTime DESC
       ";

$result = $conn -> query($sql);

// if($data) {

// } else {
//     echo "
//     <script>
//         alert('비정상 접근');
//         location.href='index.php';
//     </script>
//     ";
// }

?>

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Facebook</title>
    </head>
    <link rel="stylesheet" type="text/css" href="../view/style.css">
    <body>

    <!-- header -->
    <div id="navdiv">
        <ul class="navul1">
            <li>
                <img src="https://i.ibb.co/d2yvBkz/logo.png" width="40px">
            </li>
            <li><input type="text" placeholder="Facebook 검색"></li>
        </ul>

        <ul class="navul2">
            <li>
                <img src="https://i.ibb.co/MBcdCkP/home.png" width="25px">
            </li>
            <li>
                <img src="https://i.ibb.co/rdXgJfV/group.png" width="25px">
            </li>
        </ul>

        <ul class="navul3">
            <li>
                <p>
                    친구 찾기
                </p>
            </li>

            
            <li class="login">
                <img src="https://i.ibb.co/Zhqg0Hb/login.png" width="25px">
                <b><?php echo $_SESSION['userName'] ?></b>

                <!-- info 및 logout -->
                <div class="dropdown">
                    <button onclick="myInfoUpdate()" type="submit">정보 수정</button>
                    <button onclick="logout()" type="submit">로그아웃</button>
                </div>
            </li>


            <li class="ul3icon">
                <img src="https://i.ibb.co/jWvHNp2/menu.png">
            </li>
            <li class="ul3icon">
                <img src="https://i.ibb.co/5j2tFMn/talk.png">
            </li>
            <li class="ul3icon">
                <img src="https://i.ibb.co/myVX3mW/bell.png">
            </li>
            <li class="ul3icon">
                <img src="https://i.ibb.co/g4JNwph/more.png">
            </li>
        </ul>
    </div>

    <!-- body (3) -->

    <div id="container"> <!-- background -->

        <div id="left">
            <ul class="leftmenu">
                <li>
                    <img src="https://i.ibb.co/Zhqg0Hb/login.png">
                    <b><?php echo $_SESSION['userName'] ?></b>
                </li>
                <li>
                    <img src="https://i.ibb.co/fx7zMPC/friend.png">
                    <p>친구 찾기</p>
                </li>
                <li>
                    <img src="https://i.ibb.co/d2yvBkz/logo.png">
                    <p>시작하기</p>
                </li>
                <li>
                    <img src="https://i.ibb.co/2Fvg0mr/group.png">
                    <p>그룹</p>
                </li>
                <li>
                    <img src="https://i.ibb.co/NN4bmwV/watch.png">
                    <p>Watch</p>
                </li>
                <li>
                    <img src="https://i.ibb.co/grbNWfs/history.png">
                    <p>과거의 오늘</p>
                </li>
                <li>
                    <img src="https://i.ibb.co/9tLPmJG/bookmark.png">
                    <p>저장됨</p>
                </li>
                <li>
                    <img src="https://i.ibb.co/FXQvhtv/page.png">
                    <p>페이지</p>
                </li>
                <li>
                    <img src="https://i.ibb.co/kMvm2kW/event.png">
                    <p>이벤트</p>
                </li>
                <li>
                    <img src="https://i.ibb.co/9yqgS2B/new.png">
                    <p>최신</p>
                </li>
                <li>
                    <img src="https://i.ibb.co/Wn96QS4/star.png">
                    <p>즐겨찾기</p>
                </li>
                
            </ul>
        </div>

        <div id="main">
            <div class="mainwrap">

            <h1><center>
                <?php echo $_SESSION['userName'] ?>님, Facebook에 오신 것을 환영합니다!
                </center></h1>

                <div class="story">
                    <div>+</div>
                    <ul>
                        <li>스토리 만들기</li>
                        <li>사진을 공유하거나 글을 남겨보세요.</li>
                    </ul>                    
                </div>

                <div class="write">
                    <div>
                        <img src="https://i.ibb.co/Zhqg0Hb/login.png" width="40px">
                        <a onclick="goWrite()">
                            <input type="text" placeholder="<?php echo $_SESSION['userName'] ?>님, 무슨 생각을 하고 계신가요?">
                        </a>
                    </div>
                    <ul>
                        <li>
                            <img src="https://i.ibb.co/MRQwcz1/vc.png">
                            라이브 방송
                        </li>
                        <li>
                            <img src="https://i.ibb.co/9rTwRzR/pic.png">
                            사진/동영상
                        </li>
                        <li>
                            <img src="https://i.ibb.co/1776rHz/mood.png">
                            기분/활동
                        </li>
                    </ul>
                </div>

                <!-- 작성한 게시물 -->
                <?php while ($data = mysqli_fetch_assoc($result)) { ?>
                    <div class="written">
                        <ul class="wname">
                            <ul>
                                <li>
                                    <img src="https://i.ibb.co/Zhqg0Hb/login.png" width="40px">
                                </li>
                                <li>
                                    <b><?php echo $data['writer']; ?></b>
                                    <br>
                                    <?php echo $data['insertTime']; ?>
                                </li>
                            </ul>
                            <li class="wmore">
                                
                                <?php if($data['writer'] == $_SESSION['userName']) { ?><button onclick="updateContent()">수정</button>
                                    <button onclick="deleteContent()">삭제</button><?php } ?>
                            </li>
                        </ul>

                        <div class="content"><?php echo $data['content']; ?></div>

                        <p>좋아요 <label id="likeCount"> <?php echo $data['likeCount'];?></label>개 </p>

                        <ul class="wlike">
                            <li>
                                <img id="like" class="likeicon" onclick="like()" src="https://i.ibb.co/D7SQJkb/like.png"> 좋아요
                            </li>
                            <li>
                                <img src="https://i.ibb.co/dpcdJgt/re.png"> 댓글 달기
                            </li>
                            <li>
                                <img src="https://i.ibb.co/fD8tCmz/share.png"> 공유하기
                            </li>
                        </ul>

                        <div class="re">
                            <img src="https://i.ibb.co/Zhqg0Hb/login.png" width="40px">
                            <input type="text" placeholder="댓글을 입력하세요...">
                            
                        </div>

                    </div>
                <?php } ?>

            </div>            
        </div>

        <div id="right">
            <ul class="leftmenu">
                <li>그룹 대화</li>
                <li>
                    <div>
                        +
                    </div>
                    <p>새 그룹 만들기</p>
                </li>
            </ul>
        </div>

    </div>
    
</body>
</html>

<script src="../view/script.js"></script>

<script>
    var contentNo = <?php echo $no; ?>;
    function updateContent() {
        location.href='update_content.php?no=' + <?php echo $no ?>;
    }
    function deleteContent() {
        location.href='delete_content.php?no=' + <?php echo $no ?>;
    }
</script>