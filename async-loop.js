const callback = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
};

console.log("First");
setTimeout(callback, 0);
console.log("Second");
console.log("Third");

/* function callback() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
};

console.log("First");
setTimeout(callback, 0);
console.log("Second");
console.log("Third"); */
