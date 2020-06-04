//JS is dynamic programming language which is unique from other programming language
// Why Dynamic? Becaue it's typing is dynamic. It means supposr you declare
let name = 'Sayanta'
console.log('Type of name var is:', typeof name);
//Here we assign a String type value. In other programming language once you assigned a value then you have to assign same type of value only.
//But in JS you can assign any type of vazlue. Example:
name = 10;
console.log('Now Type of name var is:', typeof name);
name = true;
console.log('Now Type of name var is:', typeof name);
//All of them are correct because of it's dynamic tuping.
//ctrl +l 

let age = 30; 
console.log('Type of \'age\' var is:', typeof age);
age = 30.56;
console.log('Now Type of \'age\' var is:', typeof age);
// Now type of age is also number. Because in JS Interger, Float and all other numbers are is same NUmber type.
let isApproved = true;
console.log('Type of isApproved var is:', typeof isApproved);

let firstName = undefined;
console.log('Type of firstName is:', typeof firstName);
//Here firstname is itself an undefine type.
let selectedColour = null;
console.log('Type of selectedColour var is:', typeof selectedColour);
//It is Object type 
const data = 0.3;
console.log('Type of data is:', typeof data);
//It is also number type
