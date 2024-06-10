const fs = require('fs');
// const fs = require('fs/promises')


// Synchronous 
// const text = fs.readFileSync('./data.txt', 'utf-8')
// console.log(text);

// Asynchronous with Callback

console.log(1)

fs.readFile('./data.txt', {encoding: 'utf-8'}, (err, text) => {
    if (err) {
        console.log('There is a problem with the file system!');
        return;
    }

    console.log(2)
    console.log(text)
});

console.log(3)


// Asynchronous with Promises

// fs.readFile('./data.txt', {encoding: 'utf-8'})
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log('There is an error in the file system!')
//     })