/**PROPERTIES**/
class Person{
    firstName:string;
    lastName:string;
}
let phil: Person = new Person();
phil.firstName="Phil";
phil.lastName="Donahue"

/**METHODS**/
class Animal{
    firstName:string;
    lastName:string;

    sayHello(){
        console.log("Hello", this.firstName);
    }
}

let Caturday: Animal = new Animal();

Caturday.firstName = "Caturday";

Caturday.sayHello();

/**CONSTRUCTORS**/
class Game {
    constructor(name:string, maker:string){
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker:string;
}
let battleship: Game = new Game('Battleship','Harbro')

/**INHERITANCE**/
class Vehicle{
    type:string;
    make:string;
    model: string;
    manufactureYear:number;
    runs:boolean;
    topSpeed:number;
}

class Automobile extends Vehicle{
    isSelfDriving: boolean;
}
let myCar: Automobile = new Automobile();
myCar.isSelfDriving=false;
myCar.topSpeed=200;
myCar.make="Volvo"

class Motorcycle extends Vehicle{
    easyToDoWheelie:boolean;
}
let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

/**ACCESSORS**/
class Employee extends Person{
    private _salary: number;

    getSalary():string{
        return this._salary.toString();
    }
    setSalary(newSalary: number){
        this._salary = newSalary
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //this breaks
let salaryResult:string = newEmployee.getSalary();
console.log("The salary is: ", salaryResult)