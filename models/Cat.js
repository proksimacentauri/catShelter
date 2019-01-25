const mongoose = require('mongoose');
const {Schema} = mongoose;

const catSchema = new Schema({
    name: String,
    age: Number,
    healthy: String,
    weight: String,
    behaviour: String,
    catImage: String
});

mongoose.model('cats', catSchema);