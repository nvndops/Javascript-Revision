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
/* const person = {
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
user1.greetings(); */

/* ----------------------------------------------------------------------------------------------------------------------------- */

//Arrays and Array method like map()

/* const hobbies = ["Gaming","Coding","Cooking"];
console.log(hobbies[2]);

hobbies.push("Sleeping");
console.log(hobbies);

//.findIndex method takes all values and returnes the index
const index = hobbies.findIndex((item) => {
 item === "Coding";
});
//shorter way const index = hobbies.findIndex((item) =>  item === "Coding");
console.log(index);

//.map method takes all the values in array and modify them
const updatedHobbies = hobbies.map((item) => item + "!");
console.log(updatedHobbies);

//converting strings in array to object through map
//need to wrap the curly braces in paratheses to stop the curly braces acting like function container
const updatedObjectHobbies = hobbies.map((item) => ({text: item}));
console.log(updatedObjectHobbies);

//exercise import and code
import { transformToObjects } from "./arrayExcercise.js";

const numberArray = [1,2,3];
console.log(transformToObjects(numberArray)); */

/* ----------------------------------------------------------------------------------------------------------------------------- */

//Destructuring(array & object)

/* const userData = ["Naveen", "Verma"];

const firstName = userData[0];
const lastName = userData[1];
this was the old way now we can use destructuring array to perform the same thing in less code */

//Used destructuring here
/* const [firstName, lastName] = ["Naveen", "Verma"];
console.log(firstName);
console.log(lastName);
 */

//Destructuring in object
/* Old way of consuming the object values
 const user = {
    name: "Naveen",
    age: 27,
}

const userName = user.name;
const userAge = user.age; */

//Destructuring object we have to use same key for the object values but we can give them alias "name: userName" like so
/* const {name: userName, age} = {
    name: "Naveen",
    age: 27,
}

console.log(userName);
console.log(age);
 */
/* ----------------------------------------------------------------------------------------------------------------------------- */

//Spread Operator practice

//Spread operator on array
/* const hobbies = ["cooking","coding"];

const newHobbies = ["Gaming"];

//const mergedHobbies = [hobbies, newHobbies]; 
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies)

//Spread operator on object
const user = {
    name: "naveen",
    age: 27,
}

const updatedUser = {
    isAdmin: true,
    ...user
}

console.log(updatedUser); */

/* ----------------------------------------------------------------------------------------------------------------------------- */

//Control structures

//If/else
/* const password = prompt("Your Password");

if ( password === "Hello" ) {
    console.log("Hello works");
} else if ( password === "hello" ) {
    console.log("hello works");
} else {
    console.log("Access denied");
}

//for of loop
const hobbies = ["Gaming","Cooking"];

for (const hobby of hobbies) {
    console.log(hobby);
} */

/* ----------------------------------------------------------------------------------------------------------------------------- */

//Passing functions as values to both inbuilt and custom functions

/* function handleTimeout() {
    console.log("Timed out!");
}

const handleTimeout2 = () => {
    console.log("Timed out ... again!!")
}

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("Timed out with an annonymous function!!")
}, 4000);

//custom function
function greeter(greetFn) {
    greetFn();
}

greeter(() => { console.log("HI this is greeter") }); */

/* ----------------------------------------------------------------------------------------------------------------------------- */

//Defining function inside of function
//more alined to react 
function init() {
    function subFunction() {
        console.log("Hello from sub function");
    }

    subFunction();
}

init();

/* ----------------------------------------------------------------------------------------------------------------------------- */
