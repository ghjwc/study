

<?php
    echo "<html><head><meta charset='EUC-KR'><title>HOME</title><script>alert('test');</script></head><body>PHP ����: ".phpversion()."<br>My first PHP script!</body></html>";

    echo print('�ȳ��ϼ���');

    $color = "red"; //php�� ������ $
    echo "My car is " . $color . "<br>";
    echo "My house is " . $COLOR . "<br>";
    echo "My boat is " . $coLOR . "<br>";

    $txt = 'w3schools.com';
    echo 'I love '.$txt.'!';
    echo `I love $txt!`; //js�� ��ƽ�� ����

    function myTest() {
        $x = 5; // local scope
        echo "<p>Variable x inside function is: $x</p>";
      }
      myTest();
      
      // using x outside the function will generate an error
      echo "<p>Variable x outside function is: $x</p>";

    $xx = 5;
    $yy = 10;
    $abc = 'test';

    function funcTest() {
    global $xx, $yy;
    $yy = $xx + $yy;
    echo $yy.'<br>';
    }

    funcTest();
    echo $yy.'<br>'; // outputs 15

    echo $GLOBALS; //Array
    echo $GLOBALS['xx'];
    echo $GLOBALS['yy'];
    echo $GLOBALS['abc'];

    function staticTest() {
        static $staticx = 0; //�� �� ����
        echo $staticx.'<br>';
        $staticx++; //��������
      }
      
      staticTest();
      staticTest();
      staticTest();
      echo '����'.$staticx; //����


    echo '<br>';

    $a = 100;
    printf('test %b', $a);
    echo '<br>';
    var_dump($a);
    echo '<br>';
    echo gettype($a); //js�� typeof
    echo '<br>';

    /*
    data type

    js
    number, string, null, undefined, boolean, symbol, object(array, function), bigInt

    php
    number, string, null, boolean, symbol, object, resource, float, array
    */

    $ss = '�츮����';
    var_dump($ss);

    echo '<br>';

    $ss = 5895;
    var_dump($ss);

    echo '<br>';

    $ss = 10.365;
    var_dump($ss);

    echo '<br>';

    $ss = true;
    var_dump($ss);

    echo '<br>';

    $cars = array('Volvo', 'BMW', array('carsTest', false, 2), 1);
    var_dump($cars);

    class Car {
        public $color;
        public $model;
        public function __construct($color, $model) {
          $this->color = $color;
          $this->model = $model;
        }
        public function message() {
          return "My car is a " . $this->color . " " . $this->model . "!";
        }
      }
      
    $myCar = new Car("black", "Volvo");
    echo $myCar -> message();
    echo "<br>";
    $myCar = new Car("red", "Toyota");
    echo $myCar -> message();

    echo '<br>';

    var_dump($myCar);

    echo '<br>';

    $t = null;
    showType($t);

    //ȣ�̽��� ����
    function showType($t) {
        var_dump($t);
        echo '<br>';
    }

    echo PHP_INT_MAX.'<br>';
    echo PHP_INT_MIN.'<br>';
    echo PHP_INT_SIZE.'<br>';

    $q = 5895;
    var_dump(is_int($q));

    echo '<br>';

    $q = 58.95;
    var_dump(is_int($q));

    echo '<br>';

    $r = 15;
    if (is_int($r)) {
        echo '��';
    } else {
        echo '���� �ƴ�';
    }

    echo '<br>';

    $r = '59.84' + 100;
    echo $r.'<br>';
    var_dump(is_numeric($r));

    echo '<br>';

    /*
    ����� ����� ���
    const �̸� = ��; //�ҷ��� ������ �ؿ��� ���, $ ���ʿ�
    define(�̸�, ��, ��ҹ��� ����); // ���� - ���α׷� ���� �ÿ� �ҷ�����.
    */

    echo ABS.'<br>';
    echo GREETING.'<br>';

    const ABS = 'const��1';
    echo ABS;

    echo '<br>';

    define('GREETING', 'Welcome!', false);
    echo GREETING;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>Welcome to my home page!</h1>
    <p>Some text.</p>
    <p>Some more text.</p>
    <?php
      echo $_SERVER['DOCUMENT_ROOT']; 
      include $_SERVER['DOCUMENT_ROOT'].'/_db/study/footer.php';
    ?>
    
</body>
</html>