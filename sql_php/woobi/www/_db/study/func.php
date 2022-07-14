<?php

$a = 7;
$b = 2;

function addNumbers(&$a = 10, $b = 20) {
    return $a + $b;
    return ++$a;
}
echo addNumbers(/*5, '5 days'*/);

echo '<br>';

echo addNumbers($a, $b);

echo '<br>';

$cars = array (
    array('Volvo', 22, 18),
    array('BMW', 10, 8),
    array('Saab', 23, 43),
    array('Land Rover', 11, 90),
);
$rowCnt = count($cars);
$colCnt = count($cars[0]);

for ($row = 0; $row < $rowCnt; $row++) {
    for ($col = 0; $col < $colCnt; $col++) {
        echo $cars[$row][$col].' ';
    }
    echo '<br>';
}

echo '<br>';

echo $_SERVER;
echo '<br>';
foreach($_SERVER as $key => $value) {
    echo $key.'=>'.$value.'<br>';
}


?>