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



console.log("Length \t\t Area");

var sqArray = [];
for (var i = 1;  i <= 10; i++)
{
    var random = Math.floor(Math.random() * 11) + 10;
    sqArray.push(new Square(random));
    //return sqArray;
    console.log(sqArray[i] /*+ "\t\t" + length.calculateArea().toFixed(1)*/);
}
