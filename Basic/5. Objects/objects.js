/* Refernce Types: 1.Objects, 2.Arrays, 3.Functions
Here objects are similliar to our real life
where we hold a specific object related attributs in one place

Here we are declaring a person object which has two attributs anme and age. There are known as key values.
A objects can have one or more key values.
*/

let person = {
    name: 'Sayan', // properties of this object. 
    age: 30 //It is known as key value
}; // Curly braces known as object literal
console.log(person.name, person.age);
//Accessing attributs using Dot Notation
person.name = 'Anik';
console.log(person.name);

//Excessing using Bracket Notation
person['name'] = 'Montu';
console.log(person.name);

//Attritube Selection Method by user
let selection = 'name'
person[selection] = 'Mijan'
console.log(person[selection], person.name); // New technics of printing

