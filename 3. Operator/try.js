let testVar = 0;
testVar = true + 5;
console.log("true + 5 = " + testVar);

testVar = false + 5;
console.log("false + 5 = " + testVar);

testVar = true + '2';
console.log("true + '2' = " + testVar);

testVar = '2' + null;
console.log("'2' + null = " + testVar);

testVar = true + null;
console.log("true + null = " + testVar);

testVar = null + undefined;
console.log("null + undefined = " + testVar);
