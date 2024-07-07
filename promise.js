// Simulate an asynchronous operation that adds 10 to the input number
function plusTen(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof input !== 'number') {
                return reject(new Error('Input must be a number'));
            }
            const result = input + 10;
            console.log(`plusTen: ${input} + 10 = ${result}`);
            resolve(result);
        }, 1000);
    });
}

// Simulate an asynchronous operation that subtracts 5 from the input number
function minusFive(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof input !== 'number') {
                return reject(new Error('Input must be a number'));
            }
            const result = input - 5;
            console.log(`minusFive: ${input} - 5 = ${result}`);
            resolve(result);
        }, 1000);
    });
}

// Simulate an asynchronous operation that multiply 2 to the input number
function multipleTwo(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof input !== 'number') {
                return reject(new Error('Input must be a number'));
            }
            const result = input * 2;
            console.log(`multipleTwo: ${input} * 2 = ${result}`);
            resolve(result);
        }, 1000);
    });
}

// Chain the asynchronous operations
plusTen(5)
    .then(result => minusFive(result))
    .then(newResult => multipleTwo(newResult))
    .then(finalResult => {
        console.log(`Final Result: ${finalResult}`);
    })
    .catch(error => console.error(error));

// Expected output:
// doSomething: 5 + 10 = 15
// doSomethingElse: 15 - 5 = 10
// doAnotherThing: 10 + 20 = 30
// Final Result: 30
