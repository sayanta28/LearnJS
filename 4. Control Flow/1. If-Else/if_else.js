// In Js we have two type of conditional statement.
// 1.if-else, 2.Switch-Case

//Syntax:
// if( condition ){
//     statement
// }
// else if (anotherCondition){
//     statement
// }
// else if(yetAnotherCondition)
//     statement
// else
//     statement

// Example: Hour
// If the hour is between 6 am and 12 am, then it is ‘Good morning’. 
// If the hour is between 12 pm and 6 pm, then it is ‘Good afternoon’. 
// Otherwise: Good Evening.

let hour = 13;

if( hour >= 6 && hour < 12)
    console.log('Good Morning');

else if( hour >=12 && hour < 18)
    console.log('Good Afternoon');

else 
    console.log('Good Evening');
