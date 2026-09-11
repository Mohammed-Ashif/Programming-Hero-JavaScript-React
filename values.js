// truthy
let age = 20;
if (age) {
    console.log("Age exists");
} else {
    console.log("Age does not exist");
}


// falsy value: false, 0, "", null, undefined, NaN
let bKash = 0;
if (bKash) {
    console.log("Taka ase!");
} else {
    console.log("Kicchu nai!");
}

console.log(age* "Hello \n"); // NaN
console.log(typeof(NaN));
console.log(typeof(null));
console.log(typeof(undefined));