//Function Declaration
function walk(){
    console.log('walk');
}
walk();

//named Function Expression
let go = function Go() { //Here we define only go variable not Go() function
    console.log('Go');
}; //We must put semicolon here because we declare here a variable. 
go();


//Annoymous Function Expression
//Previously we know that actuaaly functions are objects. So here 
//actually we assign annoymous function as object reference.
let run = function() {
    console.log('run');
};
run();

let move = run; //here we just copy the object reference from run to move
move();
