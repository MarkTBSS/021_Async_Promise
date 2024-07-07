// Synchronous Code
console.log('First'); 

// Asynchronous Code
// SetTimeout is Callback function
setTimeout(
    function firstCallback() {
        console.log('firstCallback');
    }, 2000
);

// Asynchronous Code 
// The function will be executed after the specified delay
setTimeout(
    function secondCallback() {
        console.log('secondCallback');
    }, 1000
);

// Asynchronous Code
const thirdCallback = () => {
    setTimeout(
        function thirdCallback() {
            console.log('thirdCallback');
        }, 3000
    );
}

// Synchonous Code because they are executed right after each other
thirdCallback();
console.log('Second');
console.log('Third');
thirdCallback();