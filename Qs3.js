// Problem 3

// Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this 
// within these methods such that method chaining of add, subtract, multiply and divide is possible

class Calculator
{
    constructor(num1,num2)
    {
       this.num1 = num1;
       this.num2 = num2;
     
    }
    add()
    {
       return this.num1 + this.num2 ;
    //    num1 and num2 are properties of the class instance, 
    //    so you need to use this.num1 and this.num2 to access them. 
    //    If you just use num1 and num2 without this, JavaScript will try to find variables with those names within the local scope of the function,
    //     and since they are not defined there, it will result in an error.
    }
    subtract()
    {
       return this.num1 - this.num2 ;

    } 
    multiply()
    {
        return this.num1 * this.num2 ;
         
    }
    divide()
    {
        return this.num1 / this.num2 ;

    }
}

const insOfCalculator = new Calculator(4,2);
console.log("Addition will be =",insOfCalculator.add());
console.log("Subtraction will be =",insOfCalculator.subtract());
console.log("Multiplication will be =",insOfCalculator.multiply());
console.log("Division will be =",insOfCalculator.divide());
