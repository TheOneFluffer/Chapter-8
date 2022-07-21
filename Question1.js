class Square
{
    constructor(length)
    {
        this.length = length;
    }
    calculateArea()
    {
        return this.length ** 2;
    }
}
console.log("Length: \t\t Area:");

var sqArray = new Array();

for (var i = 0; i < 10; i++)
{
    var random = Math.floor(Math.random() * 11) + 10;    
    sqArray.push(random);
    var Square1 = new Square(sqArray[i]);
    console.log(sqArray[i] + " \t\t " + Square1.calculateArea().toFixed(1));
}