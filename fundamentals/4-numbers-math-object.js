const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4); // round up
val = Math.floor(2.6); // round down
val = Math.sqrt(64); // 8
val = Math.abs(-3); // 3
val = Math.pow(8, 2); // 64
val = Math.min(2, 33, 4, 1, 55, 6, 3); // 1
val = Math.max(2, 33, 4, 1, 55, 6, 3); // 55
val = Math.random();

val = Math.floor(Math.random() * 20 + 1); // random number between 0 and 20

console.log(val);