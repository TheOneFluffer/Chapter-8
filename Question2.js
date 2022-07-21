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

function createSquareArray()
{
    var len;
    var sqArray = [];
    for (var i = 0; i < 10; i++)
    {
        len = 10 + Math.floor(Math.random() * 11);
        sqArray.push(len[i]);
    }
    return sqArray;
}

function printSquareArray(myArray) 
{
    var Square1 = new Square(myArray);
    return Square1 /*+ " \t\t " + sqArray.createSquareArray().toFixed(1)*/;
}

var myArray = createSquareArray();
printSquareArray(myArray);