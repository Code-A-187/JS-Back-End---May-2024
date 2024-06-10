const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars')

const cats = [
    {
        name: 'Leya',
        age: 4,
        breed: 'street greatest'
    },
    {
        name: 'Joro',
        age: 15,
        breed: 'street greatest'
    },
    {
        name: 'Juja',
        age: 12,
        breed: 'black pearl'
    }
]

const server = express();

server.engine('handlebars', handlebars.engine())
server.set('view engine', 'handlebars');

server.get('/', (req, res) => {
    res.render('home', {name: 'Home'});
});

//CAN GROUP ROUTES

// server.route('/cats')
//     .get((res, req) => {
//         res.send('Cats Page')
//     })
//     .post((res, req) => {
//         res.send('New cat created!')
//     });

server.get('/cats', (req, res) => {
    // res.send('Cats Page')
    res.render('cats', { cats })
});

server.post('/cats', (req, res, next) => {
    console.log("Creating new cat");
    
    if (Math.random() < 0.5) {
        return res.send('You don\'t have luck');
    }

    next();
}, (req, res) =>{
    res.redirect("/cats")
});


server.get('/cats/download' , (req, res) => {
    const imagePath = path.join(__dirname, 'images', 'Cute-small-cat.jpg')
    
    res.download(imagePath)
    // res.sendFile(imagePath)
    // res.attachment(imagePath) // needs END
    // res.end()
})


server.get('/cats/:catName', (req, res) => {
    console.log(req.params);
    const currentCatName = req.params.catName;
    
    res.send(`Cat individual page - ${currentCatName} `)
});

server.get('/test', (req, res) =>{
    res.json({name: "Pencho"});
})

server.all('/dogs', (req, res) =>{
    res.send('That is and application for cats!!!')
})

server.get(/.*dogs/, (req, res) => {
    res.status(404).send('Page not found')
})

server.all('*', (req, res) => {
    res.status(404).send('Page not found - 404')
})


server.listen(5000, () => console.log('Server is listening on port 5000....'));
