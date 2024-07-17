const express = require('express')
const { configDatabase } = require('./config/configDatabase');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');

start();

async function start () {
    const app = express();
    const port = 3030;
    
    await configDatabase();
    configExpress(app);
    configRoutes(app);

    app.listen(port, () => {
        console.log('Server started http://localhost:3030');
        
    });   
}