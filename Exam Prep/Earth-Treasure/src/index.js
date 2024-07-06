const express = require('express')
const { configDatabase } = require('./config/databaseConfig');
const { configExpress } = require('./config/expressConfig');
const { configHbs } = require('./config/hbsConfig');
const { configRoutes } = require('./config/routesConfig');

start();

async function start () {
    const app = express();
    const port = 3000;
    
    await configDatabase();
    configHbs(app);
    configExpress(app);
    configRoutes(app);

    app.listen(port, () => {
        console.log('Server started http://localhost:3000');
        
    });   
}