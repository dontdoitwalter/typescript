/**PROPERTIES**/
interface AnimalAgain{
    name:string;
    numberOfLegs: number;
}

let lassie: AnimalAgain = {
    name:'Lassie',
    numberOfLegs: 4,
    numberofPups:0,
    isReallySmart:true
}
/**METHODS**/
function sayHello(name:string) : string {
    let someNum = 1+2;
    let someOtherNum = 1+2;
    return name;
}
interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d:Date);
}
class Apples implements Product{
    name:'Apples';
    price:5.50;
    setTimeOfPurchase(d:Date){
        console.log("apples purchased on",d)
    }
}
let myApples: Apples= new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));