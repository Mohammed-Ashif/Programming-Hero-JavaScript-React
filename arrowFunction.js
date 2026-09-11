//function total (price, quantity){
//    const grandTotal = price * quantity;
//    return grandTotal;
//}

// arrow function
const total = (price, quantity = 12) => {
    const grandTotal = price * quantity;
    return grandTotal;
}

const spend = total(11);
console.log("Spent: " + spend);

// 1 Liner Arrow Function 
const add = (a, b) => a + b;

const sum = add(10, 12);
console.log("Sum = " + sum);

