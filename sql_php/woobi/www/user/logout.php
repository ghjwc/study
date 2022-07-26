<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/_db/_lib/lib.php";

    session_unset();
    session_destroy();
    gotoUrl('../index.php');
?>