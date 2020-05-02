const mongoose = require('mongoose');
var Employee = mongoose.model('Employee',
    {
        name: { type: String },
        position: { type: String },
        office: { type: String },
        salary: { type: Number }
    }
);

module.exports = { Employee: Employee }; // short hand ES6 syntax is  module.exports = { Employee }