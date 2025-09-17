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
console.log(10 + 5); //addition
console.log(10 - 5); //subtraction
console.log(10 * 5); //multiplication
console.log(10 / 5); //division
console.log("hello " + "world"); //+ operator can also be used for concatination of strings

/* ----------------------------------------------------------------------------------------------------------------------------- */
