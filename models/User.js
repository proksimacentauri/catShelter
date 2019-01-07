const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    role: String,
    telephonenumber: String
});

mongoose.model('users', userSchema);