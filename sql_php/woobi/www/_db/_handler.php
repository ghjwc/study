<?php
	error_reporting(E_ALL);
	echo "<meta charset='euc-kr'>";

	//echo $_SERVER['REMOTE_ADDR'];
	if($_SERVER['REMOTE_ADDR'] != "121.144.88.108") exit;
	
	$servername = "localhost";
	$username = "return"; //���̵�
	$password = "www1234"; //���
	$db = "return"; //db �̸�
	
	$link = mysqli_connect($servername, $username, $password, $db);

	if(!$link) {
		echo "Error: Unable to connecto to MySQL.".PHP_EOL;
		echo "Debugging errno: ".mysqli_connect_errno().PHP_EOL;
		echo "Debugging error: ".mysqli_connect_error().PHP_EOL;
		exit();
	}

	$start_time = microtime();

	function Print_Exe_Time($start_time) {
		$end_time = microtime();
		$start_sec = explode(" ", $start_time);
		$end_sec = explode(" ", $end_time);
		$rap_micsec = $end_sec[0] - $start_sec[0];
		$rap_sec = $end_sec[1] - $start_sec[1];
		$rap = $rap_sec + $rap_micsec;
		echo "<b>���� �ӵ� ".$rap."s</b>";
	}
	$chkMul = null;
	if(isset($_POST["mysql"])) {
		$strSql = $_POST["mysql"];
		$strSql = str_replace("\\", "", $strSql);
		if(isset($_POST["mul"])) {
			$chkMul = $_POST["mul"];
			$arrSql = explode(';', $strSql);
		}
	} else {
		$strSql = "";
	}
	

	echo "<style>
		table {
			border-collapse: collapse;
			font: 11px Tahoma;
			color: #000000;
			width: 100%;
		}
		table, th, td {
			border: 1px solid black;
		}
		tr:nth-child(even) {background-color: #f2f2f2}
		th {height: 50px; background-color: #4CAF50; color: white;}
		td {padding: 10px 12px;}
		.sender {float:right;padding:13px 55px; margin:15px 0; cursor:pointer;}
		</style>";
	echo "<script>
		function querytest(e) {
			if (e.ctrlKey && e.keyCode == 13) {
				document.sendsql.submit();
			}
		}
	</script>";

	echo "<title>QueryTest</title>";
	
	echo "<form name='sendsql' action='_handler.php' method='post'>
			<lable>��Ƽ
				<input type='checkbox' name='mul'>
			</label>
			<textarea name='mysql' autofocus style='width:100%;height:300px;' onkeydown='querytest(event);'>".$strSql."</textarea><br>
			<!-- input type='submit' value='����' class='sender' -->
			</form>";

	if($strSql != "") {
		if (isset($chkMul)) {

			for ($i = 0; $i < count($arrSql); $i++) {
				$resSql = mysqli_query($link, $arrSql[$i]);
				if(!$resSql) {
					$errMessage = "<font color='red'><b>Invalide query[".mysqli_errno($link)."]: ".mysqli_error($link)."</b></font>";
					$errMessage .= "<br><p><br><p>Whole query: ".$arrSql[0];

					die($errMessage);
				}	
			}
			die((count($arrSql) - 1)."���� ���ڵ� ����");
		} else {
			$resSql = mysqli_query($link, $strSql);
			if(!$resSql) {
				$errMessage = "<font color='red'><b>Invalide query[".mysqli_errno($link)."]: ".mysqli_error($link)."</b></font>";
				$errMessage .= "<br><p><br><p>Whole query: ".$strSql;

				die($errMessage);
			}
		}

		if(is_object($resSql)) {
			$intNumRows = mysqli_num_rows($resSql);
			$intNumFields = mysqli_num_fields($resSql);
			
			echo "���ڵ� �� : <strong>".$intNumRows."</strong><br><p>";


			echo "<table border='1' width='100%'>";

			for($i = 0; $i < $intNumFields; $i++) {
				$meta = mysqli_fetch_field($resSql);
				$strFieldName[$i] = $meta->name;
				$strFieldPri[$i] = 0;
				if($meta->flags & MYSQLI_PRI_KEY_FLAG) $strFieldPri[$i] = 1;
				if($i == 0) echo "<tr align='center'>";
				echo "<th><strong>".$strFieldName[$i]." [".$strFieldPri[$i]."]</strong></th>";
				if($i == ($intNumFields - 1)) echo "</tr>";
			}

			while($dbSql = mysqli_fetch_array($resSql)) {
				echo "<tr onMouseOver=\"this.style.backgroundColor='#dfdfdf';\" onMouseOut=\"this.style.backgroundColor='';\">";
				for($j = 0; $j < $intNumFields; $j++) {
					echo "<td>".$dbSql[$strFieldName[$j]]."</td>";
				}
				echo "</tr>";
			}

			echo "</table><br><p>";
		}
	}



	Print_Exe_Time($start_time);
	
	mysqli_close($link);
?>