<?php 

include('common.php');

// if($_SESSION['email'] == '') {
//     echo "
//         <script>
//             alert('로그인 할 수 없습니다.')
//             location.href='sign_in.php';
//         </script>
//         ";
// }

$userNo = $_POST['userNo'];
$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPwd = $_POST['userPwd'];

$sql = "SELECT userNo, userName, userEmail, userPwd
        FROM Facebook
        WHERE userEmail = '$userEmail'";

// 사용자가 입력한 이메일에 해당하는 query 실행

$result = $conn -> query($sql);

$db_pw = mysqli_fetch_assoc($result);

print_r($db_pw);

if($db_pw) {
    if($userPwd == $db_pw['userPwd']) {
        $_SESSION['userNo'] = $db_pw['userNo'];
        $_SESSION['userName'] = $db_pw['userName'];
        $_SESSION['userEmail'] = $db_pw['userEmail'];
        $_SESSION['userPwd'] = $db_pw['userPwd'];
        // query에 대한 return 값이 있다면 session에 값을 저장한다.
        echo "
        <script>
            location.href = 'index.php'
        </script>
        ";
    } else {
        // echo $db_bw['password'];
        echo "
        <script>
            alert('비밀번호가 틀립니다.')
            history.back();
        </script>
        ";
    }
} else {
    echo "
    <script>
        history.back();
    </script>
    ";
}

?>