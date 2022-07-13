

<?php
    echo "<html><head><meta charset='EUC-KR'><title>HOME</title><script>alert('test');</script></head><body>PHP 버전: ".phpversion()."<br>My first PHP script!</body></html>";

    echo print('안녕하세요');

    $color = "red"; //php의 변수는 $
    echo "My car is " . $color . "<br>";
    echo "My house is " . $COLOR . "<br>";
    echo "My boat is " . $coLOR . "<br>";

    $txt = 'w3schools.com';
    echo 'I love '.$txt.'!';
    echo `I love $txt!`; //js의 백틱과 같음

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
        static $staticx = 0; //한 번 실행
        echo $staticx.'<br>';
        $staticx++; //지역변수
      }
      
      staticTest();
      staticTest();
      staticTest();
      echo '전역'.$staticx; //없음


    echo '<br>';

    $a = 100;
    printf('test %b', $a);
    echo '<br>';
    var_dump($a);
    echo '<br>';
    echo gettype($a); //js의 typeof
    echo '<br>';

    /*
    data type

    js
    number, string, null, undefined, boolean, symbol, object(array, function), bigInt

    php
    number, string, null, boolean, symbol, object, resource, float, array
    */

    $ss = '우리나라';
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

    //호이스팅 가능
    function showType($t) {
        var_dump($t);
        echo '<br>';
    }

    echo PHP_INT_MAX.'<br>';
    echo PHP_INT_MIN.'<br>';
    echo PHP_INT_SIZE.'<br>';
?>