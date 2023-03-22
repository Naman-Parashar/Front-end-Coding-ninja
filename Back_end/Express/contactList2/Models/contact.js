// define a single contact schema
const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true

    }
});

// now name of collection
const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;