const mongoose = require('mongoose');

const url = 'mongodb+srv://Mahesh:Mahesh123@cluster0.eqme0jn.mongodb.net/ReactUsers'
mongoose.connect(url, {})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));