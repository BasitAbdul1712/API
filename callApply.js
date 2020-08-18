const normalPerson = { //object
    firstName: 'rahim', //property
    lastName: 'uddin',
    Salary: 15000,
    getfullName: function(){
        console.log(this.firstName, this.lastName); //vitor theke object er property call korte this dott property name   }
    },
    chargeBill: function(amount){
        console.log(this);
        this.Salary = this.Salary - amount;
        return this.Salary;
    }
}
// normalPerson.chargeBill(150); //150 perameter call korlam
// normalPerson.chargeBill(550); //150 perameter call korlam

// console.log(normalPerson.Salary);
// //console.log(normalPerson); //baire theke object call kora
// console.log(normalPerson.firstName); // object er property call korte object dot property name


const heroPerson = {
    firstName : 'Hero',
    lastName : 'balam',
    salary : 25000
}

const friendlyPerson = {
    firstName : 'hero',
    lastName : 'malam',
    salary : 25000
}
//ekotha object er bhitor thaka method ta onno object er upor apply korar way
//1st e bilnd korte hobe. means return kore dibe

//normalPerson.chargeBill();

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendlyChargeBill  = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);
friendlyChargeBill(1500);