const mongoose = require('mongoose');
const {Schema} = mongoose;

const catSchema = new Schema({
    name: String,
    age: Number,
    healthy: String,
    weight: String,
    behaviour: String,
    image: String
});

mongoose.model('cats', catSchema);