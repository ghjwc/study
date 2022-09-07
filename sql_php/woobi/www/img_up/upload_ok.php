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
			echo "������ �ʹ� Ů�ϴ�. ($error)";
			break;
		case UPLOAD_ERR_NO_FILE:
			echo "������ ÷�ε��� �ʾҽ��ϴ�. ($error)";
			break;
		default:
			echo "������ ����� ���ε���� �ʾҽ��ϴ�. ($error)";
	}
	exit;
}

if (!in_array($ext, $allowed_ext)) {
	echo "������ �ʴ� Ȯ�����Դϴ�.";
	exit;
}
// die($_FILES['myfile']['name']);

move_uploaded_file($_FILES['myfile']['tmp_name'], "$uploads_dir/$name");

echo "<h1>���������� ���ε� �Ǿ����ϴ�.</h1>";

echo "<h2>���� ����</h2>
<ul>
	<li>���ϸ�: $name</li>
	<li>Ȯ����: $ext</li>
	<li>��������: {$_FILES['myfile']['type']}</li>
	<li>����ũ��: {$_FILES['myfile']['size']} ����Ʈ</li>
</ul>";

?>