<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  .re {
    color: red;
  }
</style>
<body>
<?php

  print_r(empty("vasdvsd")); //false
  //var_dump(empty("")); //false
  // define variables and set to empty values
  $name = $email = $gender = $comment = $website = "";
  $nameErr = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
      $nameErr = "Name is required";
    } else {
        $name = test_input($_POST["name"]);
        switch (!isName($name)) {
            case 2 :
            $nameErr = "Too Much";
            case false :
            $nameErr = "Only Korean";
            default :
            $nameErr = "";
            }
        }
    }
    
    if (empty($_POST["email"])) {
      $emailErr = "Email is required";
    } else {
      $email = test_input($_POST["email"]);
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format";
      }
    }
  
    if (empty($_POST["website"])) {
      $website = "";
    } else {
      $website = test_input($_POST["website"]);
      if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
        $websiteErr = "Invalid URL";
      }
    }
  
    if (empty($_POST["comment"])) {
      $comment = "";
    } else {
      $comment = test_input($_POST["comment"]);
    }
  
    if (empty($_POST["gender"])) {
      $genderErr = "Gender is required";
    } else {
      $gender = test_input($_POST["gender"]);
    }
  

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  function isName($name, $encode = 'utf-8') {
    $len = mb_strlen($name, $encode);
    if ($len >= 5) {
      return false;
    }
    return isonlyHangul($name, $encode);
  }

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
  <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    Name: <input type="text" name="name" value="<?php echo $name; ?>"><span class="re">*<?php echo $nameErr;?></span><br>
    E-mail: <input type="text" name="email" value="<?php echo $email; ?>"><span class="re">*<?php echo $emailErr;?></span><br>
    Website: <input type="text" name="website" value="<?php echo $website; ?>"><span><?php echo $websiteErr;?></span><br>
    Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment; ?></textarea><br>
    Gender:
    <input type="radio" name="gender" value="female" <?php $gender == "female" ? print("checked") : "";?>>Female
    <input type="radio" name="gender" value="male" <?php $gender == "male" ? print("checked") : "";?>>Male
    <input type="submit">
  </form>
</body>
</html>