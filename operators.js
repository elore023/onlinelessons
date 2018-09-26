//Operators - used to create expressions to implement logic & algorithms

//Addition 

let a = 5;
let b = 2; 
let c = x + y; 
console.log(c);


//Arithmetic Operators - perform calculations 

let x = 10;
let y = 3;

console.log(x + y); //(x + y) is an expression which produces a value
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); //remainder of division
console.log(x ** y); //exponentiation (x to the power of y)




//Increment Operators (++)
console.log(++x); //value of x is incremented by 1 first 

console.log(x++); 
console.log(x); //value of x (10) will show first and then incremnent by 1 when logged on the console

//Decrement Operators (--)

console.log(--x); //decreases by 1 

// Assignment Operators 

// x = y same as x = y 
// x += y same as x = x + y
// x -= y same as x = x - y
// x *= y same as x = x * y
// x /= y same as x = x / y 
// x %= y same as x = x % y


let x1 = 10;
x1 +=5;// same as x = x + 5; (adds 5 to 10)
console.log(x1);

x1 = x1 * 3; //is same as 
x1 *= 3;
console.log(x1);

x1 = x1 / 2; //is same as 
x1 /= 2;
console.log(x1);



//String Operators 

let txt1 = 'Hello';
let txt2 = 'Everyone';
let txt3 = txt1 + " " + txt2;
console.log(txt3);

// += assignement operator can ALSO be used to put strings together

let name = 'Erica';
name += 'Loret de Mola';
console.log(name);




//Comparison Operators - compare value of a variable with something else 

letx2 = 1;
 //Relational operators 
console.log(x2 > 0); //answer returns TRUE (boolean)
console.log(x2 >= 1); // TRUE
console.log(x2 < 1); //returns FALSE
console.log(x2 <= 1); //TRUE

// Equality operators 
console.log(x === 1); // TRUE 
console.log(x !== 1); // FALSE ! represents opposite or no

console.log(1 === 1); //(Strict equality - both values have the same type and value)
console.log('1' === 1); //FALSE - types dpn't match - one is a strong, one is a number 

// (Strict equality op. are more precise)

//Loose Equality operators (==) TWO equal signs 

console.log(2 == 2); //TRUE
console.log('2'== 2); // TRUE == looks at value on left and convert what is on the right of the operator to match
console.log(true == 2); //TRUE converts number to a boolean (types don't match, only checks if values are equal)




// Conditional/Ternary Operators 
// First example: If a customer has more than 100 pts, they are a GOLD customer, 
//otherwise, they are a SILVER customer.

//begin by declaring variable to keep track of number of points
//declare a second variable to declare type of customer

let customerPoints = 110;
let customerType = customerPoints > 100 ? 'gold' : 'silver'

console.log(customerType);
// start with condition to compare number of customerPoints to 100
// result of expression will be true (gold) or false (silver)
// ? if condition (customerPoints) evaluates to true, then customerType= gold
// : otherwise, if false, then customerType = silver 


//Second example: If a cusotmer has placed 5 or more orders, they qualify for a discount
//otherwise, they do not qualify 

let customerOrders = 5;
let customerEligibility = customerOrders >= 5 ? 'eligible' : 'notEligible';
console.log(customerEligibility);


//Logical Operators - used to mage logical decisions based on multiple conditions 

//Logical AND (&&)
//returns TRUE IF both operands are true 
console.log(true && true); // true 
console.log(true && false); // false

//example: determining loan eligibility

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan); //returns true 

// Logical OR (||) returns true if at least one of the operands is true 

let hasCar = true;
let hasInsurance = false;
let eligibleForDiscount = hasCar || hasInsurance;
console.log(eligibleForDiscount); //will still get TRUE

// Logical NOT (!)

let applicationRefused = !eligibleForLoan; //will be converted to false
console.log('Application Refused', applicationRefused);
//if someone has low income or bad credit, they wil not be eligible


// Logical Operators with NON-booleans - result will depend on value of the operand

//Falsy (false)
// undefined
// null
// 0
// false 
// '' ( false || "Erica" = "Erica" - truthy bc not an empty string)
// NaN (not a number)

//anything that is not a falsy is Truthy

// example: Users select a color for a top on an app

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
// (|| OR) means if there is a value for userColor, that will be used, otherwise, it will be default 
console.log(currentColor); //will show RED bc user has chosen red. If userColor were undefined, the color would be the default blue color

// More Logical && examples 

let people = [
	{
		name: 'carlos almonte',
		creditScore: 800,
		hasPet: false
	},
	{
		name: 'mystery almonte',
		creditScore: 210,
		hasPet: false
	},
	{
		name: 'erik almonte',
		creditScore: 400,
		hasPet: true
	},
	{
		name: 'john almonte',
		creditScore: 450,
		hasPet: false
	},
	{
		name: 'tommy almonte',
		creditScore: 710,
		hasPet: true,
		isSmoker: true,
		hasCar : true
	},
	{
		name: 'stormy daniels',
		creditScore: 620,
		hasPet: true
	},
	{
		name: 'donald trump',
		creditScore: 400,
		hasPet: false
	},						
]

function moneyGranted(person){
	let amounts = [5000, 10000, 20000, 100000]
	let moneyGranted = 0;
	if(person.hasCar && person.hasPet && person.isSmoker){
		moneyGranted = amounts[1]
	}
	else if(!person.isSmoker && person.creditScore >= 650 && person.hasCar && person.hasPet) {
		moneyGranted = amounts[0]
	}
	return moneyGranted
}

function evaluateApproval(person) {
	let isApproved = false;
		isApproved += 'you suck balls man!'

	if( person.creditScore >= 650 && 
		person.hasPet == true 	  && 
		person.hasCar == true)
	{
		isApproved = true
		isApproved += 'GOOD joB Buddy you made it in life'
		isApproved += moneyGranted(person)
	}
	return isApproved;
}

people.forEach(person => {
	console.log(evaluateApproval(person))
})










