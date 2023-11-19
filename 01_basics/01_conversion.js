let val = 33;
let val2 = "33";

//console.log(typeof(val2));
//console.log(typeof(val));

let valueInNumber = Number(val2);
//console.log(typeof(valueInNumber));
//console.log(valueInNumber);

// number can be converted to number, but 33abc is NAN...
// true and false would be converted to 0 and 1..
// Null will be 0 
// Undefined will be NAN

//BOOLEAN
// Similarly boolean will convert 0 to false and 1 to true..
// Strings to true and empty strings to false

let sumNum = true;
let numToString = String(sumNum);
// console.log(numToString);
// console.log(typeof numToString);

//***************OPERATIONS****************//

let value = -25;
let posValue = -value;
//console.log(posValue);

//Combining strings

let name = "Muhammad";
let surName = " Umair";

let fullName = name + surName;
//console.log(fullName);

/*The following 
console.log("1"  + 2 + 2)
gives output of 122 as it is treated as string meanwhile
console.log(1  + 2 + "2")
gives output of 32 
*/ 

console.log(+true); //gives 1 as output as it is converted but not prefered method
//log(true+) throws an error

console.log(+""); //empty string converted to integer and gives zero

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);