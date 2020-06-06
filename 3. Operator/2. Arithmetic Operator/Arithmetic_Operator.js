//Arithmetic operator
// We use this operator for perform calculations;
// just like the calculation we have in mathematics.
 
let x = 10;
let y = 3;

console.log(x + y); //Addition operator; it takes two operand , here X and Y. And produce a new value.
// Here we have x + y what we refer to as an expression in JS.
// What is an expression? -> Expression is something that produces value. 
console.log(x - y); // Subtraction = 7
console.log(x * y); //Multiplication = 30
console.log(x / y); //Division = 3.33...35
console.log(x % y); //Remainder = 1000
console.log('Exponent x^y(10^3) = ' + x ** y); // It represents exponentiation; x^y(X to the power of Y) 

//Increment(++); Here we need one operand
console.log('X=' + x)//here x = 10
//If we put incremment operator before x then the value of x will incremented by 1 first and then we will see that on the console.
console.log('++x = ' + ++x); // x=11
console.log('X = ' + x); //Here x= 11
//If we put the operator after x then we will see x on the console first and then the value of x will be incremented by 1.
console.log('x++ = ' + x++);// x = 11
console.log('X = ' + x + '(Incremented Value)'); // x = 12

//Decrement(--)
console.log('-- X = ' + x); //x=12
console.log(x--);//x=12
console.log('X = ' + x);//x=11
console.log(--x);//x=10
console.log('X = ' + x);//x=10

//Arithmatic Operators: Addition(+), Subtraction(-), Multiplication(*), Division(/), Exponentiation(**), Increment Operator(++), Decrement(--)