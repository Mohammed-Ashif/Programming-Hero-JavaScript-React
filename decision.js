// if else, switch case, ternary
let age = 20;

if (age >= 18){
    console.log("You are a voter.");
} else {
    console.log("You are not a voter.");
}

let marks = 80;

if (marks >= 80 && marks <= 100) {
    console.log("Grade: A+");
} else if (marks >= 70) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: A-");
} else {
    console.log("Need to improve your marks.");
}

// In switch case, we cannot use conditions like >=, <=, etc. It only checks for equality. 
// So, we can use a trick to handle ranges by using true in the switch statement and then using case statements with conditions.
// switch (marks) X
switch (true) {
    case marks >= 80 && marks <= 100:
        console.log("Grade: A+");
        break;
    case marks >= 70:
        console.log("Grade: A");
        break; 
    case marks >= 60:
        console.log("Grade: A-");
        break;
    default:
        console.log("Need to improve your marks.");
}

// Ternary operator -> condition? true : false;
age >= 18 ? console.log("You are a voter.") : console.log("You are not a voter.");


