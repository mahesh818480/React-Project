const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    fname: String,
    email: String,
    password: String,
    cnfPass: String,
});

module.exports.Form = mongoose.model('Employees', formSchema);