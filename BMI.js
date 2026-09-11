// 'readline' is a built-in Node.js module.
// It allows your program to communicate with the user through the terminal.
const readline = require('readline');

// "createInterface()" creates an interface that allows your program to receive input and produce output.
const rl = readline.createInterface(
  {
    input: process.stdin,    // This tells Node.js: "Take input from the keyboard."
    output: process.stdout   // This tells Node.js: "Send output to the terminal."
  }
);

// Calculating BMI
function calculate_BMI (weight, height) {
    const BMI = weight / (height*height);
    return BMI;
}

// "rl" is simply a variable name, but "rl" is a common abbreviation for readline.
rl.question("Enter your weight (kg): ", weightInput => {    // weightInput and heightInput is initially a string. 
  rl.question("Enter your height (m): ", heightInput => {   // That's why later you use parseFloat().
    const weight = parseFloat(weightInput); // Convert weight to a number
    const height = parseFloat(heightInput); // Convert height to a number

    // Validating the input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) { 
      console.log("Please enter valid positive numbers."); 
    } else {
      const bmi = calculate_BMI(weight, height);
      console.log("BMI: ", bmi.toFixed(2));
    }

    // Without closing the readline interface, Node.js may continue waiting for input.
    rl.close();
  });
});

// TODO list:
// Adult BMI limits are defined by the CDC as: underweight (below 18.5), 
// healthy weight (18.5–24.9), overweight (25–29.9), 
// and obesity (30+), with obesity further divided into 
//                    Class I (30–34.9), 
//                    Class II (35–39.9), 
//                    and Class III (40+).

if (bmi ) {
  console.log ("");
}