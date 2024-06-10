const fs = require('fs')


fs.unlink('./created.txt', (err) => {
    if (err) {
        return;
    }

    console.log('File is deleted')
});