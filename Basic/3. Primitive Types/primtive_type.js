//In JS there are two catagories of types. 1. Primitive/Value Types, 2. Reference Types
//1. Primitive Types: String, Number, Boolean, Undefined and Null.
let name = 'Sayanta'; //It is string literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal; Can be true or false. But True/False are reseverd Keyword.
let firstName ; //By dafault it is set as undefined
firstName = undefined; // But explicitly we can declare 'undefine'
let selectedColour = null; // We use null for initialize nothing or set the value nothing/blank

console.log('String :',name,'\nNumber:', age,'\nBoolean:', isApproved,'\nUndefine', firstName, '\nNull Value :', selectedColour);
selectedColour = 'red'; // When we get value we can replace value over null.

console.log('Replace Null Value:' , selectedColour);
// In ES6 we have another premitive named Symbol. We will see it later.
