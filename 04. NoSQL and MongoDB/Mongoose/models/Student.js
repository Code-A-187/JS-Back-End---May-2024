const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        minLength: [3, 'Minimum name length is 3 characters!'],
        maxLength: 30,
    },
    age: {
        type: Number,
        required: true,
        min: [12, 'Minimum age allowed is 12 years old!'],
        max: 120
    }
})

studentSchema.methods.getInfo = function() {
    return `Hello, my name is ${this.name}, and I'm ${this.age} years old`
}

studentSchema.virtual('description').get(function () {
    return `Name: ${this.name}, Age: ${this.name}.`
});

// Custom validator
// studentSchema.path('age')
//     .validate(function () {
//         return this.age > 0 && this.age < 120;
//     }, 'Age must be between 1 and 120 years old');

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;