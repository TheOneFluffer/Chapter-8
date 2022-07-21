var input = require("readline-sync");
var Choice = 0;
var Options = "";
class Contact
{
    constructor(name, mobileNumber)
    {
        this.name = name;
        this.mobileNumber = mobileNumber;
    }
    getContactDetails()
    {
        this.name = input.question("Name: ");
        this.mobileNumber = input.questionInt("Mobile Number: ");
    }
}

class AddressBook
{
    constructor() {
        this.myContact = [];  //class property
        this.myContact.push(new Contact("Homer", 98849959));
        this.myContact.push(new Contact("Marge", 84774744));
        this.myContact.push(new Contact("Lisa", 86994994));
        this.myContact.push(new Contact("Maggie", 94775883));
        this.myContact.push(new Contact("Bart", 88838848));
    } //end constructor

    getNumberOfContacts()
    {
        return this.myContact.length;
    }

    getContactAt()
    {
        var index = 0;
        return this.myContact[index];
    }

    searchContact()
    {
        var Num = 0;
        return Num = this.myContact.find(Contact);
    }
}

while(Choice != 3)
{
    console.log("Personal Addressbook\n--------------------------");
    console.log("(1) Show All Contacts\n(2) Search Contact\n(3) Exit\n\n");
    Choice = input.questionInt(">>");

    switch(Choice)
{
    case 1://Show all contacts
    if (Options == "X"||"x")
    {
        break;
    }
    else if (Options == "P"||"p")
    {
        for (var i = 5; i < 0; i--)
        {
            
        }
    }
        break;

    case 2://Search Contact
        var Name = input.question("Enter the name of the contact: ");
        if (Name == homer)//if name exist, then print, else, return none
        {
            console.log(Name + "'s mobile number is " /*+ Contact*/);
        }
        else
        {
            console.log("Sorry, user doesn't exist!");
        }
        break;

    case 3://Exit
        console.log("Good Bye!");
        break;

    default:
        console.log("Please enter a valid input.");
        break;
}
}
