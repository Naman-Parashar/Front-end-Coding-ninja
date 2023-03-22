const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/contact_list_db');

// verify if it is connected or not.
const db = mongoose.connection;

db.on('error',console.error.bind(console,'error'));

db.once('open',function(){
    console.log('done with data base');
});