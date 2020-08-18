class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
//class theke new keyword use kore ekta object creat korar way
const heroPerson = new Person('hero', 'balam', 200);
console.log(heroPerson);
const friendlyPerson = new Person('hero', 'kalam', 500)
console.log(friendlyPerson);

function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson =  new Person1 ('grand', 'papa', 521651)
console.log(oldPerson);

//** New keyword amra tokhon e use korbo jokhon kuno class theke amar object banabo joto iccaha toto */