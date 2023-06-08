//Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Person {
    constructor(name, age, color, legs, skills, dateOfBirth){
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    getAge() {
      return this.age;
    }
  
    getName() {
      return this.name;
    }
  
    getAppearance() {
      return `${this.legs}, ${this.color}`;
    }
  }
  