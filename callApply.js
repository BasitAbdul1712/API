const normalPerson = { //object
    firstName: 'rahim', //property
    lastName: 'uddin',
    Salary: 15000,
    getfullName: function(){
        console.log(this.firstName, this.lastName); //vitor theke object er property call korte this dott property name   }
    },
    chargeBill: function(amount){
        this.Salary = this.Salary - amount;
        return this.Salary;
    }
}
normalPerson.chargeBill(150); //150 perameter call korlam
normalPerson.chargeBill(550); //150 perameter call korlam

console.log(normalPerson.Salary);
//console.log(normalPerson); //baire theke object call kora
console.log(normalPerson.firstName); // object er property call korte object dot property name
