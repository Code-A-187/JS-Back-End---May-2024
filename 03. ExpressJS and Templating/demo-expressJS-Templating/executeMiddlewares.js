const middlewareChain = require('./middleware');

middlewareChain.use((req, res, next) => {
    req.user = 'Pencho'
    console.log('First middleware');
    next();

});

middlewareChain.use((req, res, next) => {
    req.age = 20;
    console.log('Second middleware');
    next();

});
middlewareChain.use((req, res, next) => {
    req.isAuthenticated = true;
    console.log('Third middleware');
    next();

});

middlewareChain.execute({}, {}, (req, res) => {
    console.log('Middleware CHAIN finnished');
    console.log(req);
})
