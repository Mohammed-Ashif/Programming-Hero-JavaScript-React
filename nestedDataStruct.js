// Nested Data Structure
let user = {
    Name: "Mirza Mugdho",
    Age: 24,
    Address: {
        City: "Dhaka",
        Area: "Jurain",
        ZIPcode: 1204,
    },
};

console.log(user.Address.Area);
console.log(user["Address"].City);
console.log(user["Address"]["ZIPcode"]);

// Objects as array representation! - (Array of Array)
let entry = Object.entries(user);
console.log(entry[0][0]); console.log(entry[0][1]);

// Object inside the array!
let students = [
    {
        Name: "Ashif Iqbal",
        ID: 121,
        Address: {
            Area: "Jurain",
            Thana: "Kadamtali",
            Lane: "Razzab Ali Sardar RD",
            Option: ["Raida", "Turag", "Anabil"]
        }
    },
    {
        Name: "Nabila Ibnat",
        ID: 136,
        Address: {
            Area: "Badda",
            Thana: "Vatara",
            Lane: "Embassy Lane",
        }
    },
    {
        Name: "Lamia Ibnat",
        ID: 137,
        Address: {
            Area: "Badda",
            Thana: "Vatara",
            Lane: "Embassy Lane",
        }
    }
];

console.log(students[1]);
console.log("\n  Name: " + students[2]["Name"]);
console.log("  ID: " + students[2].ID);

// Nested Object of Array:
console.log("\n" + students[0].Address.Area);
console.log(students[0].Address.Option[0]);

students[0].Address.Option[2] = "NaN";
console.log(students[0].Address.Option[2]);