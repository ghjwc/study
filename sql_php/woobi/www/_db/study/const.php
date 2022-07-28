<?php

    class Goodbye {
        const LEAVING_MESSAGE = 'Thank you for visiting us!';

        function test() {
            return $this::LEAVING_MESSAGE;
            return self::LEAVING_MESSAGE;
        }
    }

    echo Goodbye::LEAVING_MESSAGE;
    $goodbye = new Goodbye();
    echo "<br>";
    echo $goodbye->test();
    echo "<br>";
    echo "<br>";



    // Parent class
    abstract class Car {
        public $name;
        public function __construct($name) {
        $this->name = $name;
        }
        abstract public function intro(); //: string;
    }
    
    // Child classes
    class Audi extends Car {
        public function intro() {
        return "Choose German quality! I'm an $this->name!";
        }
    }
    
    class Volvo extends Car {
        public function intro() {
        return "Proud to be Swedish! I'm a $this->name!";
        }
    }
    
    class Citroen extends Car {
        public function intro() {
        return "French extravagance! I'm a $this->name!";
        }
    }
    
    // Create objects from the child classes
    $audi = new audi("Audi");
    echo $audi->intro();
    echo "<br>";
    
    $volvo = new volvo("Volvo");
    echo $volvo->intro();
    echo "<br>";
    
    $citroen = new citroen("Citroen");
    echo $citroen->intro();
    
    echo "<br>";
    echo "<br>";
    
    abstract class ParentClass {
        // Abstract method with an argument
        abstract protected function prefixName($name, $age);
      }
      
      class ChildClass extends ParentClass {
        public function prefixName($name, $age) {
          if ($name == "John Doe") {
            $prefix = "Mr.";
          } elseif ($name == "Jane Doe") {
            $prefix = "Mrs.";
          } else {
            $prefix = "";
          }
          return "name: {$prefix} {$name} <br> age: {$age}";
        }
      }
      
    $class = new ChildClass();
    echo $class->prefixName("John Doe", 12);
    echo "<br>";
    echo $class->prefixName("Jane Doe", 20);
    echo "<br>";
    echo "<br>";

    class Animal {
        
    }

    interface InterfaceMakeSound {
        public function makeSound();
    }

    interface InterfaceMove {
        public function move();
    }
    
    class Cat extends Animal implements InterfaceMakeSound, InterfaceMove { //다중상속
        public function makeSound() {
            echo " Meow ";
        }
        public function move() {
            echo "walking";
        }
    }
    
    class Dog extends Animal implements InterfaceMakeSound, InterfaceMove {
        public function makeSound() {
            echo " Bark ";
        }
        public function move() {
            echo "running";
        }
    }
    
    class Mouse extends Animal implements InterfaceMakeSound, InterfaceMove {
        public function makeSound() {
            echo " Squeak ";
        }
        public function move() {
            echo "swimming";
        }
    }
    
    // Create a list of animals
    $cat = new Cat();
    $dog = new Dog();
    $mouse = new Mouse();
    $animals = array($cat, $dog, $mouse);
    
    // Tell the animals to make a sound
    foreach($animals as $animal) {
        $animal->makeSound();
        $animal->move();
        echo "<br>";
    }

    class Animal2 {
        private $name;
        public function __construct($name) {
          $this->name = $name;
        }
        public function getName() {
          return $this->name;
        }
      }
    
      interface InterfaceEat {
        public function eat($type);
      }
    
      class MeatEat implements InterfaceEat {
        private $type;
        public function eat($type) {
          $this->type = $type;
          return $this->type."를 먹다";
        }
      }
    
      class Tigger extends Animal implements InterfaceEat {
        public function eat($type) {
          $meatEat = new MeatEat();
        //   echo $this->getName()."가 ".$meatEat->eat($type);
        }
      }
    
      $tigger = new Tigger('호랭이');
      $tigger->eat('고기');
?>