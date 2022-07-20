<?php
    // sleep(5);
    // header('Location: http://naver.com');

    echo '<button onclick='goto();'>이동</button>';

    function gotoURL($url) {
        echo "<script>
                location.replace('$url');
            </script>";
    }
?>