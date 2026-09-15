// array
let names = ["Irfan", "Mugdho", "Tashfinn", "Shaif"];
console.log(names.length);

console.log(names);

// Index always start from '0'
console.log(names[0]);

let numbers = [100, 101, 102];
console.log(numbers[2], names[2]);
console.log(numbers[4], names[1]);


// push("__") method - adds member at the last of the array
names.push("Hamim");
names.push("Fahim");
names.push("Alvi");

console.log("\n \n Valorant Team-members: \n" + names);

// pop() method - removes member from the last of the array
names.pop();
console.log("\nModified Team-members: \n " + names);

// unshift("__") method - adds member at the start of the array
names.unshift("Joshim");
console.log("\n " + names);

//shift() method - removes member from the start of the array
names.shift();
console.log("\n " + names);

// splice(startIndex, deleteCount, "___") method
names.splice(1, 0, "Onol");
console.log("\n " + names);
names.splice(3, 1, "Riduan", "Shafin");
console.log("\n " + names);
