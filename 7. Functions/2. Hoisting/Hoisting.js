/*
What is hoisting? Hoisting is that

When, Javascript engine execute this code and it moves all the function declaration to the top. So our code look like this in runtime.
This is waht we called hoisting
hoisting is the process of moving function declaration to the top of the file.
And this is done Automatically by the Javascript engine that is executing this code.
So that's the reason we can call functions that are defined using the function decalaration syntax before their derfinition.
*/

walk(); // it's working because of Hoisting
function walk(){
    console.log('Walk');
} 

//go(); //Not working bacause Hoisting not happens.
let go = function(){
    console.log('Go hurry');
};
go();


