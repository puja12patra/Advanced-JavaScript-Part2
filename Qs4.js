// Problem 4

// Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override 
// the draw method. Demonstrate polymorphism using instances of these classes.

class Shape
{
    constructor(name)
    {
        this.name = name;
    }
    draw()
    {
        console.log(`Drawing a ${this.name}`);
    }
}
class Circle extends Shape
{
    constructor(radius)
    {
        super('Circle');
        this.radius = radius;
    }
    draw()
    {
        console.log(`Drawing a circle with radius ${this.radius}`);
    }
}
class Rectangle extends Shape
{
    constructor(height,width)
    {
        super('Rectangle');
        this.height = height;
        this.width = width;
    }
    draw()
    {
        console.log(`Drawing a rectangle with width ${this.width} and height ${this.height}`);
    }
}
// Demonstrate polymorphism using instances of these classes
const shape = new Shape("Oval")
const circle = new Circle(5);
const rectangle = new Rectangle(10, 20);

shape.draw();
circle.draw(); // Outputs: Drawing a circle with radius 5
rectangle.draw(); // Outputs: Drawing a rectangle with width 10 and height 20