
/******************
 * 01 - Declaration
 ******************/
let username: string = "instructor";
let password: string = "Letmein1234";
let instructorId: number = 5;
/* OR */
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;
/* OR IMPLICIT */
let greeting = "hello";
/*****************
 * 02 - Basic Types
 *******************/

/*NUMBER*/
let age: number = 40;
let currentYear: number = 2018;
let decimal: number = .6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

/*STRING*/
let companyName: string;
companyName = "Eleven Fifty" //single quotes and double quotes okay

/*BOOLEAN*/
let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

/*ARRAY*/
let studentList: string[] = ['Tom','Tracy','Nic'];
let allScores: Array<number> = [10,20,30,40];

/*ANY*/
let dataFromThirdParty: any = "12345";
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

let dataFromFourthParty: any = 12345;
console.log(dataFromFourthParty);
console.log(typeof dataFromFourthParty)

/*VOID*/
function sayHelloToAll() : void {
    console.log("Hello to all")
}

/*NULL AND UNDEFINED*/
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

/*TUPLE*/
//declare a tuple
let usernameAndId:[number, string];
//initialize it                      order matters 
usernameAndId=[1,"kennisreally40"]

/*ENUM*/
enum WeaponType { Sword, Saber, Spear }
let weapon: WeaponType = WeaponType.Sword

enum CardType { Ace=1, two, three, four }
let cardType: string = CardType[2]
console.log(cardType)
/****************
 * 03 - Union Types
 ****************/
let x: number | string;
let y: number | null;
//these work
x='1234';
x=1324;
//these do not
x=true;
y=false;