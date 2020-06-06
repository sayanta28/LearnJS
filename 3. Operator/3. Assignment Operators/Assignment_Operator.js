//We already working eith the assignment operator. Example:
let x = 10; // Here we assign 10 value to X variable.
// Previously we also learn about increment operator. Example:
console.log(x++); //x=10
//x=11
//That actually means,
x = x + 1;
console.log(x); //x = 12
//Now we can also write is as 
x += 1;
console.log(x); //x = 13
//Now we want increment the value 5. So,
x += 5;
console.log(x); // x = 18
//We ca do it also for subtraction, Multiplication, Division, Remainder and exponential Opertor.
console.log(x -= 3); //x = 15
console.log(x *= 3); //x = 45
console.log(x /= 3 );// x = 15
console.log( x %= 3); // x= 0
x=2;
x **= 2;
console.log(x); //4


// A try (Explain by Yourself and predict output)
let varOne= 10 , increment = 4;
varOne += increment;
console.log('varOne = ' + varOne);
