// object structure
let user = {
    Name: "Mirza Mugdho",
    Age: 24,
    Address: "Jurain, Dhaka",
};

// user - Object, Name - Key 
console.log(user.Name); // using DOT notation
console.log(user["Name"]); // Bracket Notation - Dynamic type data [`${}`]

// Deleting an Element
delete user.Address;
console.log(user);

// Adding an Element
user.Address = "Naogaon, Rajshahi";
console.log(user);

// Updating an Element
user.Address = {
    City: "Rajshahi",
    Area: "Naogaon",
}; 
console.log(user.Address);
console.log(user);

console.log(user.keys); // Object Prototype

// entries() methode - returns an array of objects representing alll existing history entries

// console.log(user.entries()); // TypeError!

console.log(Object.entries(user)); //Tuple
console.log(Object.keys(user));
console.log(Object.values(user));

