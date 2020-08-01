const firstName = 'William';
const lastName = 'Johnson';
const age = 21;
const str = 'Hello there, my name is Jean';
let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = 'Jean ';
val += 'Miranda';

let greeting = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('2');

// charAt()
val = firstName.charAt('2');

// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(0, -3);

// split()
val = str.split(' ');

// replace()
val = str.replace('jean', "gu");

// includes()
val = str.includes("foo");

// Output
console.log(val);