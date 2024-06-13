const { MongoClient } = require('mongodb')

const connetionString = `mongodb://localhost:27017`;
const client = new MongoClient(connetionString)

async function run() {
    const db = client.db('mytestdb');
    const collection = db.collection('students');
    const students = await collection.find({name: 'Pancho'}).toArray();

    console.log(students)
}

run();