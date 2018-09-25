
let firstName = 'Erica';
let lastName = 'Loret de Mola';
console.log (firstName, lastName);

let shirtSize = 'medium';
let price = 10;
console.log (shirtSize + " " + price);

let x = 0;
let y = (x==0)? 1: 0; 
console.log (x);

let x1 = 5;
let y2 = 6;
let z = x1 + y2;
console.log (z);

let price1 = 10;
let price2 = 3;
let total = getSum(price1,price2); 
console.log (total);

//constants 

const interestRate = 0.3; 
// interestRate = 1;
console.log(interestRate);


//Value types: string, number, boolean, undefined, null

let name = 'Erica'; //string literal
let age = 30; //number literal
let isApproved = true; //boolean literal
let middleName; //be default is undefined if no value 
let selectedColor = null; //used when we want to clear value of a variable 

//Reference types: object, array, function 

//objects - properties 

let person = {
name: 'Erica',
age: 30
};

console.log(person);

let dog = {
    breed: 'german shepherd',
    age: 3
};

console.log(dog);

let dress = {
    length: 'maxi',
    size: 'medium'
};

console.log(dress);


//Dot notation to access a property 

person.name = 'Erica';

console.log(person.name);

//Arrays - list of objects 

let selectedColors = ['red', 'blue'];
console.log(selectedColors.length); //length tells you the amount of obj in array

//access elements in an array 0 is 1st object 

let selectedSizes = ['small', 'medium', 'large'];
console.log(selectedSizes);

let drinkOptions = [
    'cocacola', 
    'sprite', 
    'lemonade', 
    'icedtea'
];
console.log(drinkOptions[1]);//will show sprite

let cars = [
    'BMW', 
    'Lexus', 
    'Audi', 
    'Mercedes'
];
console.log(cars[2]);//shows audi

//Functions - set of statements that performs a task or calculates a value 

/**
 * Greets a person and returns a hello based on a persons name and last name
 * @param {*} name - 
 * @param {*} lastName 
 */
function greetCustomer(name, lastName) {
    console.log('Hello' + name + '' + lastName);
}

greetCustomer('Erica', 'Loret de Mola'); 
greetCustomer('Carlos', 'Almonte');

//functions do NOT need to be terminated with a ;
// name is a parameter of the greet function and Erica is an argument (the value) 


let x2 = getSum(4, 5);
function getSum(a, b) {
    return a + b; 
}


console.log('Hello World');
