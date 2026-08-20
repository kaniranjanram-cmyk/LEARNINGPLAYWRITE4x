const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number: ", (num) => {
    num = Number(num);

    if (num % 2 === 0) {
        console.log("given num is even");
    } else {
        console.log("given num is odd");
    }

    rl.close();
});