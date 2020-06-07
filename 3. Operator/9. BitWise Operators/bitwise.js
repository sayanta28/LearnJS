// 1 = 00000001
// 2 = 00000010

// bitwise OR ( | )
//Either of these bits is one it wiil be rerturn 1 otherwise 0
// 1 = 00000001
// 2 = 00000010
// R = 00000011
console.log( 1 | 2);//3

// And ( & )
//If both result is one , one wiil be return ; otherwise it will be zero.
// 1 = 00000001
// 2 = 00000010
// R = 00000000
console.log(1 & 2);//0

// Read, Write, Execute
// 00000100
// 00000110 = Read, Write
// 00000111 = 

const readPer = 4; //Read = 100 
const writePer = 2; // Write = 010
const executePer = 1; // Execute = 001

// 100 = Read
// 010 = Write
// read | write = 110 = That means we get permission for read and write
// 100
// 010
// 001
//r111 


let myPermission = 0;
myPermission = readPer | executePer; //101 & 010 = 000 
// 110
// 101 (110 & 101) = 100
// myPermission= 111
// readPer = 100
// 111 & 100 = 100 


let message = (myPermission & writePer) ? 'yes' : 'no';
console.log(message);//no

