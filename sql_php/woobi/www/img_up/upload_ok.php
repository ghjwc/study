<?php

$uploads_dir = './uploads';
$allowed_ext = array('jpg', 'jpeg', 'png', 'gif');
 
$error = $_FILES['myfile']['error'];
$name = $_FILES['myfile']['name'];
$ext = array_pop(explode('.', $name));

if ($error != UPLOAD_ERR_OK) {
	switch ($error) {
		case UPLOAD_ERR_INI_SIZE:
		case UPLOAD_ERR_FORM_SIZE:
			echo "파일이 너무 큽니다. ($error)";
			break;
		case UPLOAD_ERR_NO_FILE:
			echo "파일이 첨부되지 않았습니다. ($error)";
			break;
		default:
			echo "파일이 제대로 업로드되지 않았습니다. ($error)";
	}
	exit;
}

if (!in_array($ext, $allowed_ext)) {
	echo "허용되지 않는 확장자입니다.";
	exit;
}
// die($_FILES['myfile']['name']);

move_uploaded_file($_FILES['myfile']['tmp_name'], "$uploads_dir/$name");

echo "<h1>성공적으로 업로드 되었습니다.</h1>";

echo "<h2>파일 정보</h2>
<ul>
	<li>파일명: $name</li>
	<li>확장자: $ext</li>
	<li>파일형식: {$_FILES['myfile']['type']}</li>
	<li>파일크기: {$_FILES['myfile']['size']} 바이트</li>
</ul>";

?>