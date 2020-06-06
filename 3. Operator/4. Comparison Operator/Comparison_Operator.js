let varOne = 1;
let varTwo = 2;

//Relational Operator; Its only return true or false
console.log(varOne > varTwo); // false
console.log(varOne >= varTwo); //false
console.log(varOne < varTwo); //true
console.log(varOne <= varTwo); //true

varOne = 2;
varTwo = 2;
//Equality Operator
console.log('Hello');
console.log( varOne === varTwo); //true
console.log( varOne !== varTwo); //false
console.log( varOne == varTwo); //true
console.log( varOne != varTwo); //false

//Thinking wrok :p
varOne = 30; 
varTwo = '30';
console.log(varOne === varTwo); // false
//Here it(===) check the data type first then check the value. As here data type is not same that's why it returns false.
console.log(varOne == varTwo);// true
//here it(==) check only the value not check the data type. So, here in string 30=30 or number 30=30.
//Tht's why it's return true. 