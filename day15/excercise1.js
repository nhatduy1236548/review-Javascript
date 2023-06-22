class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  describe() {
    return `${this.name} is a ${this.age} year old ${this.color} animal with ${this.legs} legs.`;
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }

  bark() {
    return `${this.name} is barking!`;
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }

  meow() {
    return `${this.name} is meowing!`;
  }
}
