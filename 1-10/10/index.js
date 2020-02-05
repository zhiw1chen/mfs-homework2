function timeout(ms, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, ms)
    })
}

timeout(1000, 'Promise1').then(data => {
    console.log(data);
    return timeout(1000, 'Promise2');
}).then(data => {
    console.log(data)
})