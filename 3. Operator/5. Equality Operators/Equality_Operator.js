// Strict Equality Operator(Same Type + Same Value)
console.log(1 === 1); //true
console.log('1' === 1); //false

//Lose Equality Operator(It don't care about data type but only match the value) 
console.log(1 == 1); //true
console.log('1' == 1); //true 
//In Left side there is String and Right Side has Number type value.
// The Right Side Data converted into String and MAtch the value is same or not.
console.log(true == 1); //true

// It's more precise to use Strict equality operator