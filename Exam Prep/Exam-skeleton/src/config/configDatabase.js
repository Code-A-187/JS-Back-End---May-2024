const mongoose = require('mongoose')
require('../models/User');
require('../models/Data'); // TODO import real data model

// TODO import models

async function configDatabase() {
        // TODO set database name
    const connectionString = 'mongodb://localhost:27017/skeleton-db'
    
    
    await mongoose.connect(connectionString)
    
    console.log('Database connected');
}

module.exports = { configDatabase }
