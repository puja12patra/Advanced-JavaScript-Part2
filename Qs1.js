// Problem 1

// Create an object constructor Person that takes name and age as parameters and initializes them. Also, add 
// a method sayHello to greet the person

// Object constructor for Person
class Person 
{
  constructor(name, age) 
  {
    //initializes properties
    this.name = name;
    this.age = age;
 
  }
  // Method to greet the person
  sayHello() 
  {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  };
}

// Creating an instance of Person and accessing properties of an obj
const insOfPerson = new Person("Piku", 3);
// Calling the sayHello method
insOfPerson.sayHello();
