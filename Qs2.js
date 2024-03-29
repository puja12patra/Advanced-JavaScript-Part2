// Problem 2

// Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional 
// property designation and a method getDetails to display the employee details

class Person 
{
  constructor(name, age) 
  {
    //initializes properties
    this.name = name;
    this.age = age;
 
  }
}

class Employee extends Person
{
  constructor(name, age,designation) 
  {
    //initializes properties
    super(name,age);
    this.designation = designation;
  }
  getDetails()
  {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old " + "and designation is " + this.designation);
  }
}
const insOfEmployee = new Employee("Piku",28,"Manager");
insOfEmployee.getDetails();

