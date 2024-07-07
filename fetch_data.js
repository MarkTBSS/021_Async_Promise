const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        // Simulating an asynchronous operation using setTimeout
        setTimeout(() => {
            // Randomly decide to resolve or reject the promise
            const success = Math.random() > 0.5; // 50% chance to succeed or fail
            if (success) {
                resolve('Operation Successful');
            } else {
                reject('Operation Failed');
            }
        }, 1000);
    });
    return promise;
};

setTimeout(() => {
    console.log('Start Callbacks');
    fetchData()
        .then(text => {
            console.log(text);
        return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        //return fetchData();
        })
        .catch(error => {
            console.error(error);
        });
}, 1000);

console.log('Synchonous');
