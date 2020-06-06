// /In Js we have two types of logical operators,
// Logical And(&&) , Logical Or() and Logical Not.

//Logical And(&&) -> If two of them are true and 
console.log(true && true); //true
console.log(false && true); //false

//Example for AND
let highIncome = true;
let goodCreditScore =true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan); //true

// Logical OR (||)
//Returns TRUE if one of the operands is TRUE
highIncome = true;
goodCreditScore = false; 
eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligibility :' + eligibleForLoan); //true

//Not (!) --> It will return opposite value
highIncome = false;
goodCreditScore = false; 
eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligibility :' + eligibleForLoan); //true

let applicationRefund = !eligibleForLoan; //Always return opposite value
console.log('Application Refund :' + applicationRefund);//true


   