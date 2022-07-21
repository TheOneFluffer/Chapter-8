class Square{
    constructor(length)
    {
        this.length = length;
    }
    calculateArea()
    {
         return this.length ** 2; 
    }
}
var Square1 = new Square(15);
/*var Square2 = new Square(20);
var Square3 = new Square(35);
var Square4 = new Square(10);*/
console.log(Square1.calculateArea().toFixed(1));