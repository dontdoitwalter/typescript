/****ANNOTATIONS****/
function addNumbers(numOne:number, numTwo: number){
    return numOne+numTwo;
}
//this works
addNumbers(1,2);

//these do not
addNumbers(1,2,3); //too many arguments
addNumbers(1,2,3,"Foo")//too many arguments and wring argument type

/****RETURN TYPES****/
function fullName(firName:string, lName:string){
    return firName+lName;
}
fullName('Walter','Van Hooser')

function sayHello(name: string) : string {
    return name;
}

sayHello("Kenn");
sayHello(1);

function loginStuff(user: string, pass:string) : boolean {
    if (user ==='elevenfiftyuser' && pass ==='Letmein1234'){
        return (true)
    }else{
        return(false)
    }
}
loginStuff('elevenfiftyuser','Letmein1234')

/****OPTIONALS****/
function addNumbersWithOptional(numOne:number, numTwo:number, someString?:string){
    console.log(someString);
    return numOne+numTwo
}
addNumbersWithOptional(1,2);
addNumbersWithOptional(1,2,'this is optional') //OPTIONALS MUST GO AFTER ALL REQUIRED PARAMS

function optionalFullName(firName:string, lasName:string, midName?:string){
    return (firName+midName+lasName)
}