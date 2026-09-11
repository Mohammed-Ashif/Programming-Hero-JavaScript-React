// scope
{
    let food;   // Block Scope
    let age;    // Block Scoped, but can be accessed through function calling
}


let fname = "Joshim";  // Global Scope

function sayAge () {
    age = 21;  // Functinal Scope
}

sayAge();

console.log (fname);
console.log (age);
// console.log (food);  // It would show error! 