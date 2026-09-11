// String 
// Naming conventions for variables in JavaScript
// 1. camelCase: The first word is lowercase, and subsequent words are capitalized (e.g., myVariableName).
// 2. PascalCase: Each word starts with a capital letter (e.g., MyVariableName).
// 3. snake_case: Words are separated by underscores (e.g., my_variable_name).
// 4. kebab-case: Words are separated by hyphens (e.g., my-variable-name).

let firstName = "Ashif";
let lastName = "Iqbal";

// string concatenation using the + operator
let fullName = firstName + " " + lastName; 
console.log("Full Name:", fullName); 

// string concatenation using template literals
let fullNameTemplate = `${firstName} ${lastName} \n     Naogaon, Rajshahi`;
console.log(`Full Name: ${fullNameTemplate}`);

let randomString1 = 'I am a "student".';
console.log("Random String:", randomString1);

let randomString2 = "I am a \"student\".";
console.log("Random String:", randomString2);
console.log("Length of the string:", randomString2.length); 
console.log(randomString2.includes('student'));

let address = "Naogaon, Rajshahi";
console.log("\n Address:", address.toUpperCase());







