const normalPerson = { //object
    firstName: 'rahim', //property
    lastName: 'uddin',
    salary: 15000,
    getfullName: function(){
        console.log(this.firstName, this.lastName); //vitor theke object er property call korte this dott property name   }
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
 
// normalPerson.chargeBill(100); //150 perameter call korlam
// normalPerson.chargeBill(500); //150 perameter call korlam
// normalPerson.chargeBill(750);
// console.log(normalPerson.Salary);
// console.log(normalPerson); //baire theke object call kora
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

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyChargeBill  = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1500);
// friendlyChargeBill(1300);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]); // when apply use then parameter should be an array
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40]); // when apply use then parameter should be an array

console.log(heroPerson.salary);
