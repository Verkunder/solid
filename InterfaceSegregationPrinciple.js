// Пример кода, нарушающего принцип разделения интерфейса

class Animal {
    constructor(name) {
        this.name = name
    }

    walk() {
        console.log(`${this.name} is walking.`)
    }

    swim() {
        console.log(`${this.name} is swimming.`)
    }

    fly() {
        console.log(`${this.name} is flying.`)
    }
}

class Dog extends Animal {
    fly() {
        throw new Error(`${this.name} can't fly.`)
    }
}

class Fish extends Animal {
    fly() {
        throw new Error(`${this.name} can't fly.`)
    }
}

class Bird extends Animal {
    swim() {
        throw new Error(`${this.name} can't swim.`)
    }
}

const dog = new Dog('Buddy')
const fish = new Fish('Nemo')
const bird = new Bird('Tweety')

dog.fly() // throws an error
fish.fly() // throws an error
bird.swim() // throws an error

// Исправил

class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}

class Swimmable {
  swim() {
    console.log(`${this.name} is swimming.`);
  }
}

class Flyable {
  fly() {
    console.log(`${this.name} is flying.`);
  }
}

class Dog extends Animal {
  // Dog can't fly
}

class Fish extends Animal, Swimmable {
  // Fish can't fly
}

class Bird extends Animal, Flyable {
  // Bird can't swim
}

const dog = new Dog('Buddy');
const fish = new Fish('Nemo');
const bird = new Bird('Tweety');

dog.walk();
fish.swim();
bird.fly();