/* 
//IMPORT/EXPORT Practice
import util from "./util.js"; //for default export we can name import like this
import { token, version as appVersion } from "./util.js"; //for named export we can import like this
import * as utilData from "./util.js"; //can import as object too and call them

console.log(util);
console.log(token);
console.log(appVersion);

console.log(utilData.default); */
/* ----------------------------------------------------------------------------------------------------------------------------- */
// Variables practice 
//Value in let can be reassigned 
/* let userMessage = "Hello world";
userMessage = "Hello javascript";
console.log(userMessage);
console.log(userMessage);


//Value in const can not be reassigned 
const updatedUserMessage = "Hello world!!!";
//updatedUserMessage = "Hello javascript!!!" this will throw this error "Uncaught TypeError: Assignment to constant variable."
console.log(updatedUserMessage); */

/* ----------------------------------------------------------------------------------------------------------------------------- */

//Operators Practice
/* console.log(10 + 5); //addition
console.log(10 - 5); //subtraction
console.log(10 * 5); //multiplication
console.log(10 / 5); //division
console.log("hello " + "world"); //+ operator can also be used for concatination of strings */

/* ----------------------------------------------------------------------------------------------------------------------------- */

//Functions Practice

//function invoked
/* function greet() {
    console.log("Hello javascript!")
}

greet(); //function call

//function with parameters
//default values can be assigned to parameters (message = "Hello!") like this
function greetUser(userName, message = "Hello!") {
    console.log(userName);
    console.log(message);
}

greetUser("Naveen", "Doing great huh!");
greetUser("Sid");

//function cannot just take input values but also return values using return keyword
function userMessage(userName, message = "Hello!") {
    return "Hi, I am " + userName + ". " + message;
}

//vaule is returned to we need to store it somewhere like in a variable 
const greetingMessage = userMessage("Naveen", "Doing great huh!"); 
console.log(greetingMessage);

const greetingMessage2 = userMessage("Sid"); 
console.log(greetingMessage2);

//functions can also be used for producing and returning values
import { combine } from "./functionExercise.js";

const sum = combine(5,4,2);
console.log(sum);
 */
/* ----------------------------------------------------------------------------------------------------------------------------- */

//Arrow functions practice 
// We can use them for annonyous functions that have no name () => {}
/* export default () => {
    console.log("Hello world");
}

//with just one arg
number => {
    return number * number;
}
 */
/* ----------------------------------------------------------------------------------------------------------------------------- */

//Objects and classed practice
//Object in js can be used to group multiple values together
const person = {
    personName: "naveen",
    age: 27,

    //functions inside objects are called methods
    message() {
        return "Hi, I am " + this.personName + " and I'm " + this.age + " years old."
        //with this. we can access the property of this object
    }
}

console.log(person.personName);

const displayMessage = person.message();
console.log(displayMessage);


//Class practice
//we can either create objects like that or create a blueprint for them as class 
class User {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }

    greetings() {
        console.log("Hello from user class")
    }
}

const user1 = new User("naveen", 27);
console.log(user1);
user1.greetings();

/* ----------------------------------------------------------------------------------------------------------------------------- */
