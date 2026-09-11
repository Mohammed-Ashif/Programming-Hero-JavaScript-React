// functions are reusable code blocks to perform a particular task

// type function
function total (price, quantity){
    const grandTotal = price * quantity;
    return grandTotal;
}

// void function
function sayHello (name) {
    console.log("Hello " + name);
}

const spend = total (100, 12);
const save = 2000 - spend;
console.log("Total Price: " + spend + "\n  Saved: " + save + "\n");

sayHello ("Joshim");
