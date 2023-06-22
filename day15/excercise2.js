class Dog extends Animal {
    constructor(name, age, color, legs) {
      super(name, age, color, legs);
    }
  
    describe() {
      return `${this.name} is a ${this.age} year old ${this.color} dog with ${this.legs} legs.`;
    }
  
    bark() {
      return `${this.name} is barking!`;
    }
  }
  