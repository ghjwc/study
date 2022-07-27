<?php
    class Fruit {
        // Properties
        public $name;
        public $color;
      
        // Methods
        function set_name($name) {
          $this->name = $name;
        }
        function get_name() {
          return $this->name;
        }
        function set_color($color) {
          $this->color = $color;
        }
        function get_color() {
          return $this->color;
        }

        function __construct($name)
        {
            $this->name = $name;
            echo "The Fruit is start";
        }

        function __destruct()
        {
            echo "The Fruit is {$this->name}.";
            echo "The Fruit is end";
        }
      }

      $apple = new Fruit("Apple");

      class Car {
        public $name;
        public $color;
        public $oil;

        function run() {
            if ($this->oil > 0) {
                echo "run";
            }
        }
      }
      
    //   $apple = new Fruit();
    //   $banana = new Fruit();
      $apple->set_name('Apple');
      $apple->set_color('Red');
      $banana->set_name('Banana');
      $banana->set_color('Yellow');
      echo $apple->get_name().' is'.$apple->get_color();
      echo "<br>";
      echo $apple->get_color().'is'.$apple->get_color();
      echo "<br>";

      echo $apple instanceof Fruit;
      echo "<br>";
      var_dump($apple instanceof Fruit);  // 1 = true
      echo "<br>";
      print_r($apple instanceof Fruit);

      echo $apple instanceof Car;


      class Fruit_1 {
        public $name;
        public $color;
        public $weight;
      
        function set_name($n) {  // a public function (default)
          $this->name = $n;
        }
        public function get_color($n) { // a protected function
          return $this->color;
        }
        public function get_weight($n) { // a private function
          return $this->weight;
        }
      }
      
      $mango = new Fruit_1();
      $mango->set_name('Mango'); // OK
      $mango->get_color('Yellow'); // ERROR
      $mango->get_weight('300'); // ERROR

      echo $mango->set_name();
?>