<?php

//전송된 데이터 유효성 검사
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

//한글 체크
function isonlyHangul( $text, $encode = 'utf-8' ) {
    $check  = true;
    $len    = mb_strlen($text, $encode);
    for( $i = 0; $i < $len; $i++ ) {
      $cha = mb_substr( $text, $i , 1, $encode );
      if( !preg_match("/[\xA1-\xFE\xA1-\xFE]/", $cha ) ) {
          $check = false;
          break;
      }
    }
    
    return $check;
  }


?>