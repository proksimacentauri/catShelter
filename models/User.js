const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    email: String,
    password: String
});


userSchema.methods.validPassword = function( pwd ) {
    // EXAMPLE CODE!
    return ( this.password === pwd );
};

mongoose.model('users', userSchema);