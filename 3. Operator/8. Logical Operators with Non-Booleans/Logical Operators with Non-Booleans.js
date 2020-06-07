
//Falsy (false)
//undefined
//null
// 0
//false
// ''
//NaN (Not a Number)

// Anything that is not flase -> Truthy

let userColor = 'red';
let defaultColor = 'blue';
let currentColour = userColor || defaultColor;
console.log(currentColour); //red

userColor = undefined;
defaultColor = 'blue';
currentColour = userColor || defaultColor;
console.log(currentColour); //blue
