// Arithmetic Operators in JavaScript (+ - * / %)
// Assignment Operators in JavaScript (= += -= *= /= %=)
// Logical Operators in JavaScript (&& || !)
// Comparison Operators in JavaScript (== === != !== < > <= >=)

const a = 9, b = 5, c = 2, d = 4, e = 3;

const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a / b;
const remainder = a % b;

// Template literals — using backticks
console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
console.log(`Remainder: ${remainder}`);
console.log("\n-----------------------------\n");

// String concatenation — using the + operator
console.log("Sum: " + sum);
console.log("Difference: " + difference.toFixed(2)); // Using toFixed to format the difference
console.log("Product: " + product);
console.log("Quotient: " + quotient.toFixed(2)); // Using toFixed to format the quotient
console.log("Remainder: " + remainder);

// Using operator precedence
const operation = a + b - c * d / e; 
console.log("\n-----------------------------\n");
// Using toFixed to format the result
console.log(`Result of the operation (a + b - c * d / e): ${operation.toFixed(2)}`); 

// sum = sum + 10; sum += 10; // those all are same
const t = a > b;
console.log(`Is a greater than b? ${t}`); // true

const u = a < b;
console.log(`Is a less than b? ${u}`); // false

const v = a >= b;
console.log(`Is a greater than or equal to b? ${v}`); // true

const w = a == b;
console.log(`Is a equal to b? ${w}`); // false

// Condition checking
if (a > b && c < d) {
    console.log("Both conditions are true: a is greater than b AND c is less than d");
} else {
    console.log("At least one condition is false");
}
if (a > b || c > d) {
    console.log("At least one condition is true: a is greater than b OR c is greater than d");
} 
if (!(a < b)) {
    console.log("Negation: a is NOT less than b");
}

// Checks both value and type
const x = 10, y = "10";
const isEqual = (x === y);
console.log(`Is x strictly equal to y? ${isEqual}`); // false

// If a > b is true, then it returns the second operand
const condition1 = a > b && 10;
console.log(`Result of logical AND operation (a > b && 10): ${condition1}`); // 10 

// If a > b is false, then it returns the first operand
const condition2 = !(a > b) && 30;
console.log(`Result of logical NOT AND operation (!(a > b) && 30): ${condition2}`); // false


// If a < b is false, then it returns the second operand
const condition3 = a < b || 20;
console.log(`Result of logical OR operation (a < b || 20): ${condition3}`); // 20

// If a > b is true, then it returns the first operand
const condition4 = a > b || 40;
console.log(`Result of logical OR operation (a > b || 40): ${condition4}`); // true 
