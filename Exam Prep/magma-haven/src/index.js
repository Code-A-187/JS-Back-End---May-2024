const express = require('express')
const { configDatabase } = require('./config/configDatabase');
const { configExpress } = require('./config/configExpress');
const { configHbs } = require('./config/configHbs');
const { configRoutes } = require('./config/configRoutes');
const { register, login } = require('./services/userService');
const api = require('./services/volcanoService')
const { createToken, verifyToken } = require('./services/jwtService');

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
        test();
    });   
}


async function test() {
    try {
        const dataId = '6677093fefb9f4d3d348e006';
        // const userId = '6676f574d52c0ee9437f5b72';
        // Read Record
        // /*
        // const result = await api.getById(dataId);
        // console.log(result);
        ///*

        // // /* create record
        // const result = await api.create({
        //     name: 'Hunga Tonga',
        //     location: 'Tonga Islands',
        //     elevation: 114,
        //     lastEruption: 2022,
        //     image: 'http://localhost:3000/public/images/hunga-tonga.jpg',
        //     typeVolcano: 'Submarine',
        //     description: 'Hunga Tonga-Hunga is a submarine volcano in the South Pacific located about 30 km south of the submarine volcano of Fonuafo\'ou and 65 km north of Tongatapu, Tonga\'s main island. It is part of the highly active Kermadec-Tonga subduction zone and its associated volcanic arc, which extends from New Zealand north-northeast to Fiji, and is formed by the subduction of the Pacific Plate under the Indo-Australian Plate. It lies about 100 km above a very active seismic zone.',
        //     owner: '6676f3bac8067d4ed7601cec'
        // }, '6676f3bac8067d4ed7601cec');
        // // */
        
        // ///* edit record
        // const dataId = '6677069bc6e87095fa069022'
        // const formData = {
        //     name: 'Hunga Tonga',
        //     location: 'Tonga Islands',
        //     elevation: 114,
        //     lastEruption: 2024,
        //     image: 'http://localhost:3000/public/images/hunga-tonga.jpg',
        //     typeVolcano: 'Submarine',
        //     description: 'Hunga Tonga-Hunga is a submarine volcano in the South Pacific located about 30 km south of the submarine volcano of Fonuafo\'ou and 65 km north of Tongatapu, Tonga\'s main island. It is part of the highly active Kermadec-Tonga subduction zone and its associated volcanic arc, which extends from New Zealand north-northeast to Fiji, and is formed by the subduction of the Pacific Plate under the Indo-Australian Plate. It lies about 100 km above a very active seismic zone.',
        // };
        // const userId = '6676f3bac8067d4ed7601ced';
        // const result = await api.update(dataId, formData, userId);
        // //*/

         
        // ///*Delete Record
        // const dataId = '6677069bc6e87095fa069022';
        // const userId = '6676f3bac8067d4ed7601cec';
        // await api.deleteById(dataId, userId);
        // //*/

        // // // Add Vode
        // const userId = '6676f574d52c0ee9437f5b74';

        // const result  = await api.addVote(dataId, userId);
        
        // console.log(result)

    } catch (err) {
        console.log('Caught error');       
        console.error(err.message);
    }
}
