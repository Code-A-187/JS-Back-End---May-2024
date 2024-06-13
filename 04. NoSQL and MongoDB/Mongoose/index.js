const mongoose =  require('mongoose');
const Student = require('./models/Student')

mongoose.connect('mongodb://localhost:27017/mytestdb')
    .then(() => console.log('DB Connected successfully'))



const student = new Student({
    name: 'Stamat4',
    age:  17,
})

//CREATE
// Save model instance to DB
// student.save()
// .then(createdStudent => {
//     console.log('Student saved');
//     console.log(createdStudent)
// });


// Save with static method
// Student.create({
//     _id: '666969074d5d8cfdf4b9b2f2',   
//     name: 'Maryika',
//     age: 17,
// }).then(data => console.log(data))

// READ
// Get all data
Student.find({})
    .then(students => { students.forEach(student => {
    console.log(student.getInfo())
    });
});

// Get all data with filter
Student.find({age: { $gte: 19 }})
    .then(result => {
        result.forEach(student => console.log(student.description));
    });

// Get single record
Student.findOne({ name: { $in: ['Pancho', 'Maryika'] } })
    .sort({ age: 1 })
// Student.findOne({$or: [{name: 'Stamat3'}, {name: 'Mariyka'}]})
    .then(student => {
        console.log('findOne');
        console.log(student);
    });

//Get by ID
Student.findById('666963543402be2ccadafb7b')
    .then(result => { 
        console.log('findById')
        console.log(result)
    })

// Update
Student.updateOne({name: 'Pancho'}, {$set: {age: 20}, })
    .then(result => {
        console.log("updateOne");
        console.log(result);
    });

Student.updateMany({age: 16}, {$set: {age: 17}})
    .then(result => {
    console.log("updateOne");
    console.log(result);
});

Student.findByIdAndUpdate('66695dd60d27710c3bcdcdf6', { $set: {age: 20} } )
    .then(result => {
        console.log('findByIdAndUpdate');
        console.log(result)
    })

// DELETE 
Student.findByIdAndDelete('6669c4425e52fb49267302e0')
    .then(result => {
        console.log('findByIdandDelete');
        console.log(result)
    })

Student.deleteOne({name: 'Stamat4'})
    .then(result => {
    console.log('deleteOne');
    console.log(result)
})

Student.deleteMany({_id: {$in: ["6669686acb0690281b3bd156", '6669ce91d2f79c653c2a3edd']}})
    .then(result => {
    console.log('deleteMany');
    console.log(result)
    });
