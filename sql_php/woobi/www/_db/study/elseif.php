<?php

$t = date('H');
var_dump($t);

echo '<br>';

if ($t < '12' && $t > '12') {
    echo 'Have a good day!';
} elseif ($t < '9') {
    echo 'Hava a good afternoon!';
} else {
    echo 'Hava a good night!';
}

echo '<br>';
echo '<br>';

$time = time();
echo $time;
echo '<br>';
echo date('y년/m월/d일', $time);

echo '<br>';
echo '<br>';

$d = strtotime('tomorrow');
echo 'Created date is'.date(' Y-m-d h:i:sa', $d);

echo '<br>';
echo '<br>';

$startDate = strtotime('Saturday');
echo '시작일'.date(' m월 d일', $startDate).'<br>';

$endDate = strtotime('+6 weeks', $startDate);
echo '종료일'.date(' m월 d일', $endDate).'<br>';

while ($startDate > $endDate) {
    echo date('m월 d일', $startDate).'<br>';
    $startDate = strtotime('1+ week', $startDate);
}
echo date('m월 d일', $startDate).'<br>';

$d1 = strtotime('July 04');
$d2 = ceil(($d1 - time())/60/60/24);

echo '<br>';

$favColor = 'red';

switch ($favColor) {
    case 'red' :
        echo 'Your favourite color is red!';
        break;
    case 'blue' :
        echo 'Your favourite color is blue!';
        break;
    case 'green' :
        echo 'Your favourite color is green!';
        break;
}

echo '<br>';
echo '<br>';

$x = 1;

do {
    echo 'number: '.$x.'<br>';
    $x++;
} while ($x <= 5);

echo '<br>';

for ($xx = 1; $xx <= 10; $xx++) {
    echo 'The number is: '.$xx.'<br>';
}

?>
